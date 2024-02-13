import { ClientResponse, ImportContainer } from "@commercetools/importapi-sdk";
import { importApiRoot } from "./client";

export function createImportContainer(
  key: string
): Promise<ClientResponse<ImportContainer>> {
  return importApiRoot.importContainers().post({ body: { key } }).execute();
}
