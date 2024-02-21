import { CartDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export function createCart(cartDraft: CartDraft) {
  return apiRoot.carts().post({ body: cartDraft }).execute();
}

export function getCartById(ID: string) {
  return apiRoot.carts().withId({ ID }).get().execute();
}

export function addLineItemsToCart(
  ID: string,
  arrayOfSKUs: Array<string>,
  version: number
) {
  return apiRoot
    .carts()
    .withId({ ID })
    .post({
      body: {
        version,
        actions: arrayOfSKUs.map((sku) => ({ action: "addLineItem", sku })),
      },
    })
    .execute();
}
