import path from "path"
import fs from "fs"
import yaml from "js-yaml"

const configDirectory = path.join(process.cwd(), "content")
const configPath = path.join(configDirectory, "config.json");
const configContents = fs.readFileSync(configPath, "utf8");
const config = yaml.load(configContents, { schema: yaml.JSON_SCHEMA });

export function getCategories() {
  return config.categories;
}

export function getCategory(name) {
  return config.categories.find(category => category.name === name);
}
