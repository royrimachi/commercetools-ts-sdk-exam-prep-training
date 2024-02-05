import { TaxCategoryDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export const createTaxCategory = (taxCategoryDraft: TaxCategoryDraft) => {
  return apiRoot.taxCategories().post({ body: taxCategoryDraft }).execute();
};
