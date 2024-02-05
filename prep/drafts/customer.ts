import { CustomerDraft, _BaseAddress } from "@commercetools/platform-sdk";

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

export const addressDraft: _BaseAddress = {
  country: "PE",
  city: "Lima",
  postalCode: "15001",
  streetName: "Av. Siempreviva",
  streetNumber: "180",
  firstName: "Roy",
  lastName: "Rimachi",
  title: "Mr.",
};
