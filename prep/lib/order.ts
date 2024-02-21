import {
  ClientResponse,
  Cart,
  OrderFromCartDraft,
  Order,
} from "@commercetools/platform-sdk";
import { apiRoot } from "./client";
import { createCartDraft } from "../drafts/cart";
import { addLineItemsToCart, createCart, getCartById } from "./cart";
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

export const addLineItemsToCartByCartId = (
  cartId: string,
  arrayOfSKUs: Array<string>
): Promise<ClientResponse<Cart>> => {
  return getCartById(cartId).then((cart) =>
    addLineItemsToCart(cart.body.id, arrayOfSKUs, cart.body.version)
  );
};

export const createOrderFromCartId = (
  cartId: string
): Promise<ClientResponse<Order>> =>
  createOrderFromCartDraft(cartId).then((orderFromCartDraft) =>
    apiRoot
      .orders()
      .post({
        body: orderFromCartDraft,
      })
      .execute()
  );

const createOrderFromCartDraft = (
  cartId: string
): Promise<OrderFromCartDraft> =>
  getCartById(cartId).then((cart) => ({
    cart: {
      id: cartId,
      typeId: "cart",
    },
    version: cart.body.version,
  }));
