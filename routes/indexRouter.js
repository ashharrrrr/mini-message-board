import { Router } from "express";
import { homeController, getForm, addMessage } from "../controllers/homeController.js";

const indexRouter = Router();

indexRouter.get("/", homeController);
indexRouter.get("/new", getForm);
indexRouter.post("/new", addMessage);

export default indexRouter;

