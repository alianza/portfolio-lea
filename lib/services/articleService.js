import path from "path"
import fs from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"

const contentDirectory = path.join(process.cwd(), "content/articles")
const fileNames = fs.readdirSync(contentDirectory)

export function getArticles() {
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

export function getArticleIds() {
  return fileNames.map(fileName => {
    return {
      params: {
        articleId: fileName.replace(".md", ""),
      }
    }
  })
}

export function getArticle(articleId) {

  const article = fileNames
    .filter(fileName => fileName.replace(".md", "") === articleId)
    .map((fileName) => {
      const fileContents = fs.readFileSync(path.join(contentDirectory, fileName), "utf8")
      const articleData = matter(fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      articleData.content = marked(articleData.content)

      return {
        id: fileName.replace(".md", ""),
        ...articleData,
      }
    })

  return article[0];
}

