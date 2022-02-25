import path from "path"
import fs from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"

const contentDirectory = path.join(process.cwd(), "content/pages")
const fileNames = fs.readdirSync(contentDirectory)

export function getPage(pageName) {
  const filePath = path.join(contentDirectory, `${pageName}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const pageData = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  });
  pageData.content = marked(pageData.content);


  return {
    ...pageData.data,
    content: pageData.content
  };
}

