import { CustomerGroupDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export const createCustomerGroup = (customerGroupDraft: CustomerGroupDraft) => {
  return apiRoot.customerGroups().post({ body: customerGroupDraft }).execute();
};
