import { pocApiRoot } from "./lib/client";
import { getCustomObjectByContainerAndKey } from "./lib/customizatonService";
import { getCustomerByKey, setCustomFieldValue } from "./lib/customer";
import * as checkout from "./lib/order";
import { createPayment } from "./lib/payment";
import { log } from "../utils/logger";

// TODO Step 1: Update customer key, cartId and other consts
const customerKey = "tt-customer";
const cartId = "2f8397ef-966a-4935-bd97-b2f7ed939333";
const customObjectContainer = "Schemas";
const customObjectKey = "bonusPointsCalculationSchema";
const customerBonusFieldName = "bonuspoints-custom-field";
const taxCategoryKey = "standard-tax-category";

// // TODO Step 1: Customer wants to create an order, get all data to update their bonus points
//
// getCustomerByKey(customerKey)
//     .then(log)
//     .catch(log);

// checkout.getCartById(cartId)
//     .then(log)
//     .catch(log);

// getCustomObjectByContainerAndKey(customObjectContainer, customObjectKey)
//     .then(log)
//     .catch(log);

// // Now, improve the query with GraphQL

// TODO Step 2: Fetch customer bonus points, cart value, bonus points calculation schema
// Single GraphQL query to fetch all the information you need to place an order

const placeOrder = async () => {
  // // TODO Step 2: Now use graphql as an improved method to get all the information
  // // Prepare the query
  const query = `
    query ($cartId: String!, $customerKey: String!, $customObjectContainer: String!) {
        cart (id: $cartId) { totalPrice { currencyCode centAmount } }
        customer (key: $customerKey) { custom { customFieldsRaw { name value } } }
        customObjects (container: $customObjectContainer) { results { key value } }
        }
    `;

  var graphQLResponse = await pocApiRoot
    .graphql()
    .post({
      body: {
        query,
        variables: { cartId, customerKey, customObjectContainer },
      },
    })
    .execute();

  let customObject = graphQLResponse.body.data.customObjects.results[0].value;
  let cartTotal = graphQLResponse.body.data.cart.totalPrice.centAmount;
  let oldPoints =
    graphQLResponse.body.data.customer.custom.customFieldsRaw[0].value;

  let earnedPoints = await calculateBonusPoints(cartTotal, customObject);

  // // TODO Step 2:
  // // 1. Add custom line item in the cart for bonus points
  // // 2. Create order
  // // 3. update bonus points on customer

  // // TODO Step 3
  // // Check the order in the Merchant Center and Impex
};

// placeOrder().then(log).catch(log);

const calculateBonusPoints = async (
  cartTotal: number,
  customObject: any,
): Promise<number> => {
  // Find factor, addon
  // Do some maths to calculate the bonus points
  let earnedPoints = 0;
  Object.entries(customObject).forEach((block) => {
    let { minCartValue, maxCartValue, factor, addon } = block[1] as cartValues;
    if (cartTotal >= minCartValue && cartTotal <= maxCartValue) {
      earnedPoints = (cartTotal / 100) * factor + addon;
    }
  });
  return earnedPoints;
};

export interface cartValues {
  minCartValue: number;
  maxCartValue: number;
  factor: number;
  addon: number;
}
