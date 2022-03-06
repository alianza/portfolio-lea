import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"

const pagesDirectory = path.join(process.cwd(), "content/pages")

export async function getPage(pageName) {
  const filePath = path.join(pagesDirectory, `${pageName}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const pageData = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  });
  pageData.content = marked(pageData.content);


  return {
    ...pageData.data,
    content: pageData.content
  };
}

