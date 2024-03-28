import express from "express";
import UrlModel from "../models/UrlModel.js";
import { nanoid } from "nanoid";

const UrlController = express.Router();

UrlController.get("/", (req, res)=>{
    UrlModel.findAll().then(result=>{
        return res.json({
            data: result
        });
    }).catch(error=>{
        return res.status(402).json(error);
    });
});

UrlController.get("/:nanoid", (req, res)=>{
    let {nanoid} = req.params;
    UrlModel.findOne({nanoid}).then(result=>{
        return res.json(result);
    }).catch(error=>{
        return res.status(402).json(error);
    });
});

UrlController.post("/", async(req, res)=>{
    let {url} = req?.body;
    let checkExisting = await UrlModel.findOne({where: {url: url}});
    if(checkExisting){
        return res.json({
            nanoid: checkExisting?.nanoid
        });
    }
    let data = {nanoid: nanoid(10), url};
    UrlModel.create(data).then(result=>{
        return res.json({
            nanoid: result?.nanoid
        });
    }).catch(error=>{
        return res.status(402).json(error);
    });
});

export default UrlController;