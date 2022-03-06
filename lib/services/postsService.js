import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"

const contentDirectory = path.join(process.cwd(), "content/posts")

export async function getPosts() {
  const fileNames = await fs.readdir(contentDirectory)

  return fileNames
    .map(async (fileName) => {
      const fileContents = await fs.readFile(path.join(contentDirectory, fileName), "utf8")
      const post = await matter(fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      post.content = await marked(post.content)

      return {
        id: fileName.replace(".md", ""),
        ...post,
      }
    }).reverse();
}

export async function getPostIds() {
  const fileNames = await fs.readdir(contentDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        postId: fileName.replace(".md", ""),
      }
    }
  })
}

export async function getPost(postId) {
  const filePath = path.join(contentDirectory, `${postId}.md`);
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

