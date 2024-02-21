import { log } from "../utils/logger";
import {
  addLineItemsToCartByCartId,
  createCartByCustomerKey,
} from "./lib/order";

const CUSTOMER_KEY = "rr-customer";
const CART_ID = "8df27891-30ff-4c11-b6f8-b559c8511729";

// TODO Step 1: create a cart
async function step1() {
  return createCartByCustomerKey(CUSTOMER_KEY).then(log).catch(log);
}

// TODO Step 2: Add a product variant to your cart
async function step2() {
  return addLineItemsToCartByCartId(CART_ID, ["01"]).then(log).catch(log);
}

// TODO Step 3: Place an order using the cart

(async function () {
  await step2();
})();
