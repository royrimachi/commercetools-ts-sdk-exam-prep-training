import { CustomerDraft, CustomerGroupDraft } from "@commercetools/platform-sdk";
import { createCustomer } from "./lib/customer";
import { customerDraft } from "./drafts/customer";

import { log } from "../utils/logger";

// TODO Step 1: Create a new customer.
function step1(customerDraft: CustomerDraft) {
  return createCustomer(customerDraft);
}
// TODO Step 2: Update the customer's billing address.
// TODO Step 3: Create a customer group.
// TODO Step 4: Assign the customer to the customer group.
// TODO Step 5: Create a tax category.
// TODO Step 6: Create a few product categories.
// TODO Step 7: Query the categories by key.

async function CRUD_operations() {
  await step1(customerDraft);
}

CRUD_operations();
