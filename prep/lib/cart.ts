import { CartDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export function createCart(cartDraft: CartDraft) {
  return apiRoot.carts().post({ body: cartDraft }).execute();
}
