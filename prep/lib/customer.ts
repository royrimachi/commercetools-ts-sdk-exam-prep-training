import { apiRoot } from "./client";
import {
  ClientResponse,
  Customer,
  CustomerDraft,
  CustomerSignInResult,
  CustomerUpdate,
} from "@commercetools/platform-sdk";

export const getCustomerById = (
  ID: string
): Promise<ClientResponse<Customer>> => {
  return apiRoot.customers().withId({ ID }).get().execute();
};

export const getCustomerByKey = (
  key: string
): Promise<ClientResponse<Customer>> => {
  return apiRoot.customers().withKey({ key }).get().execute();
};

export const createCustomer = (
  customerDraft: CustomerDraft
): Promise<ClientResponse<CustomerSignInResult>> => {
  return apiRoot.customers().post({ body: customerDraft }).execute();
};

export const updateCustomer = (
  customerId: string,
  customerUpdate: CustomerUpdate
): Promise<ClientResponse<Customer>> => {
  return apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({ body: customerUpdate })
    .execute();
};
