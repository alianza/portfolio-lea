import path from "path"
import { promises as fs } from "fs"
import yaml from "js-yaml"

const configDirectory = path.join(process.cwd(), "content")
const configPath = path.join(configDirectory, "config.json");

async function getConfig() {
  const configContents = await fs.readFile(configPath, "utf8");
  return yaml.load(configContents, { schema: yaml.JSON_SCHEMA });
}

export async function getCategories() {
  const config = await getConfig();
  return config.categories;
}

export async function getCategory(name) {
  const config = await getConfig();
  return config.categories.find(category => category.name === name);
}
