import { Router } from "express";
import { homeController, getForm, addMessage, getMessageDetails } from "../controllers/homeController.js";

const indexRouter = Router();

indexRouter.get("/", homeController);
indexRouter.get("/new", getForm);
indexRouter.get("/messageDetails/:messageId", getMessageDetails);
indexRouter.post("/new", addMessage);

export default indexRouter;

