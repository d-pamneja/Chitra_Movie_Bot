// Importing the dependencies
import { Router } from "express";
import { verifyToken } from "../utils/token_manager.js";

// Initialising the user Router
const chatRouter = Router();

chatRouter.use(verifyToken)
chatRouter.get('/') 

// Exporting the user Router
export default chatRouter;