import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"
import { getCategory } from "./configService"

const postsDirectory = path.join(process.cwd(), "content/posts")

export async function getPosts() {
  const fileNames = await fs.readdir(postsDirectory)

  return fileNames
    .map(async (fileName) => {
      const fileContents = fs.readFile(path.join(postsDirectory, fileName), "utf8")
      const post = matter(await fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      post.content = marked(post.content)

      return {
        id: fileName.replace(".md", ""),
        ...post,
      }
    }).reverse()
}

export async function getCategories() {
  const posts = await Promise.all(await getPosts())

  const categories = []

  for (const post of posts) {
    const category = await getCategory(post.data.category) || null

    if (!categories.includes(category)) {
      categories.push(category)
    }
  }

  return categories
}



export async function getPostIds() {
  const fileNames = await fs.readdir(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        postId: fileName.replace(".md", ""),
      }
    }
  })
}

export async function getPost(postId) {
  const filePath = path.join(postsDirectory, `${postId}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const post = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  });
  post.content = marked(post.content);

  return {
    id: postId,
    ...post.data,
    content: post.content
  }
}

