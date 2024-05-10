import express from "express";
import bodyParser from "body-parser";
import RouteConfig from "./config/routeConfig.js";
import sequelize from "./config/sequelize.js";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(RouteConfig);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server is started on port: ${process.env.SERVER_PORT}`);
    sequelize.authenticate().then(()=>{
        console.log(`DB connected.`);
    });
});