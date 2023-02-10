
import { createAnonymousCart, createCart } from "../handson/lib/order";
import { log } from "../utils/logger";

// // TODO Step 1: Create a cart
// // TODO Step 2: Create an anonymous cart

createCart("").then(log).catch(log);

createAnonymousCart().then(log).catch(log);
