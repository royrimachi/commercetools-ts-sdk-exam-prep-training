import { log } from "../utils/logger";
import { apiRoot } from "./handson/client";

// Learning Goals
// Api Clients
// Get Project details

// TODO Step 1: Provide API credentials for your trial project in .env
// TODO Step 2: Check ClientService.java
        
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project

// TODO Step 3:: Get project settings

apiRoot
    .get()
    .execute()
    .then(log)
    .catch(log);


