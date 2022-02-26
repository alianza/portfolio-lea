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
      const articleData = matter(fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      articleData.content = marked(articleData.content)

      return {
        id: fileName.replace(".md", ""),
        articleData,
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

export function getPost(articleId) {
  const filePath = path.join(contentDirectory, `${articleId}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const articleData = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  });
  articleData.content = marked(articleData.content);

  return {
    id: articleId,
    ...articleData.data,
    content: articleData.content
  }
}

