import fs from "fs";
import fetch from "node-fetch";
import path from "path";

const baseURL = "https://dev-api.vega.investments";
const translationsEndpoint = "/localizations?locale=en-US";

async function fetchTranslations() {
  try {
    const response = await fetch(`${baseURL}${translationsEndpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching translations:", error);
    throw error;
  }
}

async function saveTranslationsToFile(translations) {
  const jsonData = JSON.stringify(translations.data, null, 2);
  const filePath = path.join(
    process.cwd(),
    "src/translations/translation.json",
  );

  fs.promises
    .writeFile(filePath, jsonData, "utf8")
    .then(() => {
      console.log("Translations saved successfully to", filePath);
    })
    .catch((error) => {
      console.error("Error saving translations:", error);
    });
}

async function main() {
  try {
    const translations = await fetchTranslations();
    await saveTranslationsToFile(translations);
  } catch (error) {
    console.error("Failed to process translations:", error);
  }
}

main();
