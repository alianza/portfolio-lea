import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import { marked } from "marked"
import * as configService from "./configService"
import { getCategory } from "./configService"

const postsDirectory = path.join(process.cwd(), "content/posts")

export async function getPosts(options = {}) {
  const fileNames = await fs.readdir(postsDirectory).catch(() => [])

  const posts = await Promise.all(fileNames
    .map(async (fileName) => {
      const fileContents = fs.readFile(path.join(postsDirectory, fileName), "utf8")
      const post = matter(await fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      post.content = marked.parse(post.content)

      return {
        id: fileName.replace(".md", ""),
        ...post,
        ...(options.preview && { content: '' }),
      }
    }).reverse())

  for (const post of posts) {
    post.data.category = await getCategory(post.data.category)
  }

  posts.sort((a, b) => parseDate(b.data.date) - parseDate(a.data.date))

  return posts
}

export async function getCategories() {
  const posts = await getPosts()

  const categories = []

  for (const post of posts) {
    const category = await getCategory(post.data.category.name)

    if (category && !categories.find((c) => c.name === category.name)) {
      const relevantPosts = posts.filter((p) => p.data.category.name === category.name)
      category.count = relevantPosts.length
      category.posts = relevantPosts.map((post) => ({
        name: post.data.title,
        date: post.data.date,
      }))
      categories.push(category)
    }
  }

  // Add remaining (unused) categories
  for (let category of await configService.getCategories()) {
    if (!categories.find((c) => c.name === category.name)) {
      category.count = 0
      categories.push(category)
    }
  }

  // sort categories by newest post
  categories.sort((a, b) => {
    const aLatestPost = a?.posts?.sort((a, b) => parseDate(b.date)  - parseDate(a.date))[0]
    const bLatestPost = b?.posts?.sort((a, b) => parseDate(b.date)  - parseDate(a.date))[0]
    const aDate = parseDate(aLatestPost?.date).getTime() || 0
    const bDate = parseDate(bLatestPost?.date).getTime() || 0
    return aDate - bDate
  })

  return categories.reverse()
}

const parseDate = (date) => {
  const [day, month, year] = date?.split("-") || []
  return new Date(year, month - 1, day)
}

export async function getPostIds() {
  const fileNames = await fs.readdir(postsDirectory).catch(() => [])

  return fileNames.map(fileName => ({
    postId: fileName.replace(".md", ""),
  }))
}

export async function getPostsByCategory(categoryName) {
  const posts = await getPosts()

  return posts.filter((post) => post.data.category.name === categoryName)
}

export async function getPost(postId) {
  const filePath = path.join(postsDirectory, `${postId}.md`)
  const fileContents = await fs.readFile(filePath, "utf8")
  const post = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  })
  post.content = marked.parse(post.content)

  return {
    id: postId,
    ...post.data,
    content: post.content
  }
}

