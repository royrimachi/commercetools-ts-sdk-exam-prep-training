import { ClientResponse, Cart } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";


export const createCart = (customerKey: string): Promise<ClientResponse<Cart>> => {
    throw new Error("Function not implemented")
}

export const createAnonymousCart = (): Promise<ClientResponse<Cart>> => {
    throw new Error("Function not implemented")
}


export const getCartById = (ID: string): Promise<ClientResponse<Cart>> =>{
    throw new Error("Function not implemented")
}
export const addLineItemsToCart = (cartId: string, arrayOfSKUs: Array<string>): Promise<ClientResponse<Cart>> =>{
    throw new Error("Function not implemented")
}