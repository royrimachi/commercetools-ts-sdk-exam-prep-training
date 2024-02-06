import { CategoryDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export const getCategoryByKey = (key: string) => {
  return apiRoot.categories().withKey({ key }).get().execute();
};

export const createCategory = (categoryDraft: CategoryDraft) => {
  return apiRoot.categories().post({ body: categoryDraft }).execute();
};
