import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"
import { serialize } from "next-mdx-remote/serialize"

const postsDirectory = path.join(process.cwd(), "content/posts")

export async function getPosts() {
  const fileNames = await fs.readdir(postsDirectory)

  return fileNames
    .map(async (fileName) => {
      const fileContents = await fs.readFile(path.join(postsDirectory, fileName), "utf8")
      const post = await matter(fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      post.content = await marked(post.content)

      return {
        id: fileName.replace(".mdx", ""),
        ...post,
      }
    }).reverse();
}

export async function getPostIds() {
  const fileNames = await fs.readdir(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        postId: fileName.replace(".mdx", ""),
      }
    }
  })
}

export async function getPost(postId) {
  const filePath = path.join(postsDirectory, `${postId}.mdx`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const post = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  });
  post.content = marked(post.content);

  const mdxSource = await serialize(fileContents, { parseFrontmatter: true })

  mdxSource.frontmatter.date = post.data.date;

  console.log({
    id: postId,
    ...post.data,
    content: mdxSource
  });

  return {
    id: postId,
    ...post.data,
    content: mdxSource
  }
}

