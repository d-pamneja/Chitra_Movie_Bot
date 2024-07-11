console.log(
    "This is V0.0.2 of the Chitra Movie Bot, made by Dhruv Pamneja."
); 

// Importing Required Dependencies
import express from "express";
import {config} from "dotenv";
import morgan from "morgan";

// Creating Express application
config();
const app = express();

// Initialising the Middlewares
app.use(express.json());
app.use(morgan("dev")); // This needs to be removed when in production mode

// Export the app
export default app;