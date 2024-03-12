import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { marked } from 'marked';

const experiencesDirectory = path.join(process.cwd(), 'content/experiences');

export async function getExperiences(options = {}) {
  const fileNames = await fs.readdir(experiencesDirectory).catch(() => []);

  const experiences = await Promise.all(
    fileNames.map(async (fileName) => {
      const fileContents = await fs.readFile(path.join(experiencesDirectory, fileName), 'utf8');
      const experience = await matter(fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
      });
      experience.content = marked.parse(experience.content) || '';

      return {
        id: fileName.replace('.md', ''),
        ...experience,
        ...(options.preview && { content: '' }),
      };
    }),
  );

  const sortedExperiences = experiences.sort((a, b) =>
    new Date(a.data.startDate) < new Date(b.data.startDate) ? 1 : -1,
  );

  return sortedExperiences;
}

export async function getExperiencesIds() {
  const fileNames = await fs.readdir(experiencesDirectory).catch(() => []);

  return fileNames.map((fileName) => ({ experienceId: fileName.replace('.md', '') }));
}

export async function getExperience(experienceId) {
  const filePath = path.join(experiencesDirectory, `${experienceId}.md`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const experience = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
  });
  experience.content = marked.parse(experience.content) || '';

  return {
    id: experienceId,
    ...experience.data,
    content: experience.content,
  };
}
