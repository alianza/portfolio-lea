import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"

const articlesDirectory = path.join(process.cwd(), "content/articles")

export async function getAllArticles(userName) {
  const articles = (await getArticles()).map((article) => {
      const parts = article.date.split("-");
      const date = `${parts[2]}-${parts[1]}-${parts[0]}`;
      return {
        ...article,
        date,
        type: "md",
      }
  });

  const mediumArticles = await getMediumArticles(userName)

  const allArticles = [...articles, ...mediumArticles]

  const sortedArticles = allArticles.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1);

  // convert dates back to dd-mm-yyyy
  sortedArticles.map(article => {
    const d = new Date(article.date);
    const date = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
    return { ...article, date }
  })

  return sortedArticles;
}

export async function getArticles() {
  const fileNames = await fs.readdir(articlesDirectory).catch(() => [])

  const articles = await Promise.all(fileNames
    .map(async (fileName) => {
      const fileContents = fs.readFile(path.join(articlesDirectory, fileName), "utf8")
      const { data } = matter(await fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })

      return {
        id: fileName.replace(".md", ""),
        ...data,
      }
    }).reverse())

  return articles
}

const baseUrl = "https://mediumpostsapi.vercel.app/api/";

export async function getMediumArticles(userName) {
  const data =  await fetch(baseUrl + userName).then((res) => res.json());
  return data.dataMedium
}
