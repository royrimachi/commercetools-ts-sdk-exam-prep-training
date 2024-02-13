import { log } from "../utils/logger";
import { createImportContainer } from "./lib/importService";

const PREP_CONTAINER_NAME = "prep-container-pp";

// TODO Step 1: Create an import container using Import API
function step1() {
  createImportContainer(PREP_CONTAINER_NAME).then(log).catch(log);
}

(async function () {
  await step1();
})();
