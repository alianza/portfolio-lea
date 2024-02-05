import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import { marked } from "marked"
import * as configService from "./configService"

const postsDirectory = path.join(process.cwd(), "content/posts")

export async function getPosts(options = {}) {
  const fileNames = await fs.readdir(postsDirectory).catch(() => [])

  const posts = await Promise.all(fileNames
    .map(async (fileName) => {
        const post = await parsePost(fileName);

      return {
        id: fileName.replace(".md", ""),
        ...post,
        ...(options.preview && { content: '' }),
      }
    }))

  for (const post of posts) {
    post.data.category = await configService.getCategory(post.data.category)
  }

  posts.sort((a, b) => new Date(a.data.date) < new Date(b.data.date) ? 1 : -1)

  return posts
}

export async function getCategories() {
  const posts = await getPosts()

  const categories = [] // [{ name: "category", count: 0, posts: [{ name: "post", date: "date" }] }]

  for (const post of posts) {
    const category = await configService.getCategory(post.data.category.name)

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
    const aLatestPost = a?.posts?.sort((a, b) => new Date(b.date)  - new Date(a.date))[0]
    const bLatestPost = b?.posts?.sort((a, b) => new Date(b.date)  - new Date(a.date))[0]
    const aDate = new Date(aLatestPost?.date).getTime() || 0
    const bDate = new Date(bLatestPost?.date).getTime() || 0
    return aDate + bDate
  })

  return categories
}

export async function getPostIds() {
  const fileNames = await fs.readdir(postsDirectory).catch(() => [])
  return fileNames.map(fileName => ({ postId: fileName.replace(".md", ""), }))
}

export async function getPostsByCategory(categoryName) {
  const posts = await getPosts()
  return posts.filter((post) => post.data.category.name === categoryName)
}

export async function getPost(postId) {
  const post = await parsePost(`${postId}.md`)

  return {
    id: postId,
    ...post.data,
    content: post.content,
    category: await configService.getCategory(post.data.category)
  }
}

const parsePost = async (fileName) => {
  const filePath = path.join(postsDirectory, fileName)
  const fileContents = await fs.readFile(filePath, "utf8")
  const post = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  })
  post.content = marked.parse(post.content) || ''

  return {
    id: fileName.replace(".md", ""),
    ...post,
  }
}
