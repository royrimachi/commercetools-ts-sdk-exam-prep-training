import { log } from "../utils/logger";
import { IMPORTED_PRICES, PREP_CONTAINER_KEY } from "./drafts/import";
import { createImportContainer, importPrices } from "./lib/importService";

// TODO Step 1: Create an import container using Import API
function step1() {
  createImportContainer(PREP_CONTAINER_KEY).then(log).catch(log);
}

// TODO Step 2: Import new product price
function step2() {
  const importResponse = importPrices(PREP_CONTAINER_KEY, {
    type: "price",
    resources: IMPORTED_PRICES,
  });

  log(importResponse);
}

(async function () {
  await step2();
})();
