import path from "path"
import { promises as fs } from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"

const experiencesDirectory = path.join(process.cwd(), "content/experiences")

export async function getExperiences() {
  const fileNames = await fs.readdir(experiencesDirectory)

  return fileNames
    .map(async (fileName) => {
      const fileContents = fs.readFile(path.join(experiencesDirectory, fileName), "utf8")
      const experience = matter(await fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      experience.content = marked(experience.content)

      return {
        id: fileName.replace(".md", ""),
        ...experience,
      }
    }).reverse()
}

export async function getExperiencesIds() {
  const fileNames = await fs.readdir(experiencesDirectory)

  return fileNames.map(fileName => {
    return {
      experienceId: fileName.replace(".md", ""),
    }
  })
}

export async function getExperience(experienceId) {
  const filePath = path.join(experiencesDirectory, `${experienceId}.md`)
  const fileContents = await fs.readFile(filePath, "utf8")
  const experience = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  })
  experience.content = marked(experience.content)

  return {
    id: experienceId,
    ...experience.data,
    content: experience.content
  }
}

