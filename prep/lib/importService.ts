import {
  ClientResponse,
  ImportContainer,
  ImportResponse,
  PriceImportRequest,
} from "@commercetools/importapi-sdk";
import { importApiRoot } from "./client";

export function createImportContainer(
  key: string
): Promise<ClientResponse<ImportContainer>> {
  return importApiRoot.importContainers().post({ body: { key } }).execute();
}

export function importPrices(
  importContainerKey: string,
  body: PriceImportRequest
): Promise<ClientResponse<ImportResponse>> {
  return importApiRoot
    .prices()
    .importContainers()
    .withImportContainerKeyValue({ importContainerKey })
    .post({ body })
    .execute();
}
