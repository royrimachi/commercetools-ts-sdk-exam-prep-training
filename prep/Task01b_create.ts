import { CustomerDraft, CustomerUpdate } from "@commercetools/platform-sdk";
import { createCustomer, updateCustomer } from "./lib/customer";
import { addressDraft, customerDraft } from "./drafts/customer";

function customerAddAddress(version: number): CustomerUpdate {
  return {
    version,
    actions: [{ action: "addAddress", address: addressDraft }],
  };
}

function customerAddBillingAddress(
  version: number,
  addressId: string
): CustomerUpdate {
  return {
    version,
    actions: [{ action: "setDefaultBillingAddress", addressId }],
  };
}

// TODO Step 1: Create a new customer.
function step1(customerDraft: CustomerDraft) {
  return createCustomer(customerDraft);
}
// TODO Step 2: Update the customer's billing address.
async function step2(addressId: string, customerId: string, version: number) {
  if (addressId !== undefined) {
    return updateCustomer(
      customerId,
      customerAddBillingAddress(version, addressId)
    );
  }
}

// TODO Step 3: Create a customer group.
// TODO Step 4: Assign the customer to the customer group.
// TODO Step 5: Create a tax category.
// TODO Step 6: Create a few product categories.
// TODO Step 7: Query the categories by key.

async function CRUD_operations() {
  await step1(customerDraft);
}

CRUD_operations();
