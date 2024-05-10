import express from "express";
import routeConfig from "./config/routeConfig.js";
import sequelize from "./config/sequelize.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(routeConfig);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server is started on port: ${process.env.SERVER_PORT}`);
    sequelize.authenticate().then(()=>{
        console.log(`DB connected.`);
    });
});