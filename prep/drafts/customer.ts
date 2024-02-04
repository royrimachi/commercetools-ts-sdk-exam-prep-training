import { CustomerDraft } from "@commercetools/platform-sdk";

export const customerDraft: CustomerDraft = {
  firstName: "Test",
  lastName: "Tester",
  email: "test@test.com",
  password: "password",
  key: "tt-customer",
  addresses: [
    {
      country: "DE",
      key: "tt-customer-address",
    },
  ],
  defaultBillingAddress: 0,
  defaultShippingAddress: 0,
};
