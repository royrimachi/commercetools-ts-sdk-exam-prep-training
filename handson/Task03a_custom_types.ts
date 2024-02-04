import { TypeDraft } from "@commercetools/platform-sdk";
import { log } from "../utils/logger";
import { createCustomType, getCustomTypes } from "./lib/customizatonService";

// TODO Step 1: Check if custom type exists for storing customers' bonus points
getCustomTypes().then(log).catch(log);

// // TODO Step 2: Create a custom type for storing bonus points for customers
// const typeDraft: TypeDraft = {
// };

// createCustomType(typeDraft)
//     .then(log)
//     .catch(log);

// TODO Step 3: In the Merchnat Center, enter a random number (1 to 100)
// in the bonus points custom field for your customer
