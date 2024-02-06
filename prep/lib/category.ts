import { CategoryDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export const createCategory = (categoryDraft: CategoryDraft) => {
  return apiRoot.categories().post({ body: categoryDraft }).execute();
};
