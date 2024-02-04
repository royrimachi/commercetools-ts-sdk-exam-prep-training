import * as checkout from "./lib/order";
import { createPayment } from "./lib/payment";
import { log } from "../utils/logger";

const customerKey = "tt-customer";

// create a cart and add line items to it

const prepareCart = async () => {
  let customerCart = await checkout
    .createCart(customerKey)
    .then((cart) =>
      checkout.addLineItemsToCart(cart.body.id, ["rose-flowers-box"]),
    )
    .then((cart) => checkout.setShippingMethod(cart.body.id));

  if (customerCart) {
    return {
      status: 201,
      message: "Cart created: " + customerCart.body.id,
    };
  }
};

prepareCart().then(log).catch(log);
