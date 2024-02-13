import { log } from "../utils/logger";
import { IMPORTED_PRICES, PREP_CONTAINER_KEY } from "./drafts/import";
import {
  createImportContainer,
  getContainerOperations,
  getContainerSummaries,
  importPrices,
} from "./lib/importService";

const PREP_CONTAINER_NAME = "prep-container-pp";

// TODO Step 1: Create an import container using Import API
function step1() {
  createImportContainer(PREP_CONTAINER_KEY).then(log).catch(log);
}

// TODO Step 2: Import new product price
async function step2() {
  const importResponse = await importPrices(PREP_CONTAINER_KEY, {
    type: "price",
    resources: IMPORTED_PRICES,
  });

  log(importResponse);
}

// TODO Step 3: Verify
function step3() {
  getContainerOperations(PREP_CONTAINER_NAME).then(log).catch(log);
  getContainerSummaries(PREP_CONTAINER_NAME).then(log).catch(log);
}

(async function () {
  await step3();
})();
