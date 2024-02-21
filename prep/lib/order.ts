import { ClientResponse, Cart } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";
import { createCartDraft } from "../drafts/cart";
import { createCart } from "./cart";
import { getCustomerByKey } from "./customer";

export const createCartByCustomerKey = (
  customerKey: string
): Promise<ClientResponse<Cart>> => {
  return getCustomerByKey(customerKey).then((customer) => {
    return createCart(
      createCartDraft(
        customer.body.id,
        customer.body.email,
        customer.body.addresses.find(
          (address) => address.id === customer.body.defaultShippingAddressId
        )
      )
    );
  });
};

export const createAnonymousCart = (): Promise<ClientResponse<Cart>> => {
  throw new Error("Function not implemented");
};

export const getCartById = (ID: string): Promise<ClientResponse<Cart>> => {
  throw new Error("Function not implemented");
};
export const addLineItemsToCart = (
  cartId: string,
  arrayOfSKUs: Array<string>
): Promise<ClientResponse<Cart>> => {
  throw new Error("Function not implemented");
};
