import express from "express";
import UrlController from "../controllers/UrlController.js";

const RouteConfig = express.Router();

RouteConfig.use("/urls", UrlController);


RouteConfig.use((req, res)=>{
    res.status(404).json({
        message: "Route not found",
        error: new Error("Route not found")
    });
});

export default RouteConfig;