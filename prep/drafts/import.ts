import { PriceImport } from "@commercetools/importapi-sdk";

export const PREP_CONTAINER_KEY = "prep-container-pp";

export const IMPORTED_PRICES: PriceImport[] = [
  {
    key: "imported-price-01",
    product: {
      typeId: "product",
      key: "cotton-t-shirt",
    },
    productVariant: {
      typeId: "product-variant",
      key: "01",
    },
    value: {
      type: "centPrecision",
      currencyCode: "EUR",
      centAmount: 1050,
      fractionDigits: 2,
    },
  },
];
