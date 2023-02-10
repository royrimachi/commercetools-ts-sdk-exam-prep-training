import { CustomerDraft, CustomerGroupDraft } from "@commercetools/platform-sdk";
import {
    createCustomer,
} from "./handson/customer";
import { log } from "../utils/logger";

// TODO Step 1: Create a new customer.
// TODO Step 2: Update the customer's billing address.
// TODO Step 3: Create a customer group.
// TODO Step 4: Assign the customer to the customer group.
// TODO Step 5: Create a tax category.
// TODO Step 6: Create a few product categories.
// TODO Step 7: Query the categories by key.


const customerDraft: CustomerDraft = {
    firstName: "Test",
    lastName: "Tester",
    email: "test@test.com",
    password: "password",
    key: "tt-customer",
    addresses: [
        {
            country: "DE",
            key: "tt-customer-address"
        }
    ],
    defaultBillingAddress: 0,
    defaultShippingAddress: 0
};

createCustomer(customerDraft).then().then(log).catch(log);