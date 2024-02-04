import { importProducts, importPrices } from "./lib/importService";
import { getSourceProduct, getSourceProducts } from "./lib/productService";
import { log } from "../utils/logger";

// TODO Step 1: Provide your container key
const containerKey = "tt-ImportContainer";

// TODO Step 2: Get products from the Concept project and import to POC
getSourceProducts()
  .then((products) => importProducts(containerKey, products))
  .then(log)
  .catch(log);

// // TODO Step 3: Check the status of your import operations
// check import summary for your container
// checkImportSummary(containerKey).then(log).catch(log);

// // check import operations for your container
// checkImportOperationsStatus(containerKey).then(operations =>
//     operations.body.results.forEach(operation =>
//         log(operation.id + " : " + operation.state)
//     )
// );

// // Check the status of import operations by their Ids
// checkImportOperationStatusById("b17bde76-9536-4115-b4d7-d9c1a54194a0").then(log).catch(log);
// checkImportOperationStatusById("b0a5adb1-2b1d-40fc-94a4-64b240c11020").then(log).catch(log);

// TODO Step 4: Verify products in the Merchant Center
// publish the imported products

// // https://github.com/commercetools/commercetools-project-sync#run
// docker run \
// -e SOURCE_PROJECT_KEY=xxx \
// -e SOURCE_CLIENT_ID=xxx \
// -e SOURCE_CLIENT_SECRET=xxx \
// -e TARGET_PROJECT_KEY=xxx \
// -e TARGET_CLIENT_ID=xxx \
// -e TARGET_CLIENT_SECRET=xxx \
// commercetools/commercetools-project-sync:5.2.2 -s all
