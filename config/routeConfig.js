import express from "express";
import UrlController from "../controllers/UrlController.js";

const RouteConfig = express.Router();

RouteConfig.use("/", UrlController);

export default RouteConfig;