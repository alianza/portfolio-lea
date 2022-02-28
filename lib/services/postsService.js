import path from "path"
import fs from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"

const contentDirectory = path.join(process.cwd(), "content/posts")
const fileNames = fs.readdirSync(contentDirectory)

export function getPosts() {
  return fileNames
    .map((fileName) => {
      const fileContents = fs.readFileSync(path.join(contentDirectory, fileName), "utf8")
      const post = matter(fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      post.content = marked(post.content)

      return {
        id: fileName.replace(".md", ""),
        ...post,
      }
    })
}

export function getPostIds() {
  return fileNames.map(fileName => {
    return {
      params: {
        postId: fileName.replace(".md", ""),
      }
    }
  })
}

export function getPost(postId) {
  const filePath = path.join(contentDirectory, `${postId}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
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

