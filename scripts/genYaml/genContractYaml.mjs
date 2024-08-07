import { fetchAndSaveApiDocs } from "./fetchApiDocs.mjs";

// const OLD_API_DOCS_URL = "https://dev-api.vega.investments/v2/v3/api-docs";
// const token = process.env.rawToken; // expires quickly so dont reccoment this
// const url = `https://raw.githubusercontent.com/vegainvestments/server/develop/api-gateway/src/main/resources/openApi.yaml?token=${token}`;

// Manual download link => Raw
// https://github.com/vegainvestments/server/blob/develop/api-gateway/src/main/resources/openApi.yaml

const prUrlWithToken = `https://${
  process.env.CONTRACT_FIRST_PAT
}@raw.githubusercontent.com/vegainvestments/server/${process.env.TARGET_PR_BRANCH_NAME || "develop"}/api-gateway/src/main/resources/openApi.yaml`;

fetchAndSaveApiDocs(prUrlWithToken);
