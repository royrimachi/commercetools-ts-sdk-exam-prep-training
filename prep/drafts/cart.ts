import { Address, CartDraft } from "@commercetools/platform-sdk";

export const createCartDraft = (
  customerId: string,
  customerEmail: string,
  shippingAddress: Address | undefined
): CartDraft => ({
  currency: "EUR",
  country: "DE",
  customerId,
  customerEmail,
  shippingAddress,
  deleteDaysAfterLastModification: 1,
});
