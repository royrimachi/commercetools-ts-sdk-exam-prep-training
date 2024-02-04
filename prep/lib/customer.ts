import { apiRoot } from "./client";
import {
  ClientResponse,
  Customer,
  CustomerDraft,
  CustomerSignInResult,
} from "@commercetools/platform-sdk";

export const getCustomerById = (
  ID: string
): Promise<ClientResponse<Customer>> => {
  throw new Error("Function not implemented");
};

export const getCustomerByKey = (
  key: string
): Promise<ClientResponse<Customer>> => {
  throw new Error("Function not implemented");
};

export const createCustomer = (
  customerDraft: CustomerDraft
): Promise<ClientResponse<CustomerSignInResult>> => {
  return apiRoot.customers().post({ body: customerDraft }).execute();
};
