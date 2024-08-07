import fs from "fs";
import { dump, load } from "js-yaml";
import fetch from "node-fetch";
import { promisify } from "util";

import { filterSwaggerByTag } from "./filterSwaggerByTag.mjs";
import { modifyPaths } from "./modifyPaths.mjs";

const OUTPUT_FILE = "./scripts/genYaml/api-documentation.yaml";

const excludedTags = [
  "backoffice",
  "Data access and permission",
  "webhook",
  "market-data-controller",
];

// Promisify fs functions for asynchronous use
const writeFileAsync = promisify(fs.writeFile);

export async function fetchAndSaveApiDocs(apiDocsUrl) {
  try {
    // Fetch the API documentation
    const response = await fetch(apiDocsUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch API docs: ${response.statusText}`);
    }
    const text = await response.text();

    await writeFileAsync("./scripts/genYaml/output.yaml", text, "utf8");
    const json = await load(text);
    // await writeFileAsync(
    //   "./scripts/genYaml/output.json",
    //   JSON.stringify(json, null, 2),
    //   "utf8",
    // );

    filterSwaggerByTag(json, excludedTags);

    // Modify JSON by appending "v2" to paths
    modifyPaths(json);

    const yamlStr = dump(json);

    // Write the YAML string to the output file
    await writeFileAsync(OUTPUT_FILE, yamlStr, "utf8");
    console.log(`API documentation saved to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error("Error fetching and saving API documentation:", error);
  }
}
