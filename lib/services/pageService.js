import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"
import { serialize } from "next-mdx-remote/serialize"

const pagesDirectory = path.join(process.cwd(), "content/pages")

export async function getPage(pageName) {
  const filePath = path.join(pagesDirectory, `${pageName}.mdx`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const page = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  });
  page.content = marked(page.content);

  const mdxSource = await serialize(fileContents, { parseFrontmatter: true })

  return {
    ...page.data,
    content: mdxSource
  };
}

