import express from "express";
import UrlController from "../controllers/UrlController.js";

const routeConfig = express.Router();

routeConfig.use("/urls", UrlController);


routeConfig.use((req, res)=>{
    res.status(404).json({
        message: "Route not found",
        error: new Error("Route not found")
    });
});

export default routeConfig;