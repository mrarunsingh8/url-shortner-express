import express from "express";
import RouteConfig from "./config/routeConfig.js";
import sequelize from "./config/sequelize.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(RouteConfig);

app.listen(3000, ()=>{
    console.log(`Server is started on port: 3000`);
    sequelize.authenticate().then(()=>{
        console.log(`DB connected.`);
    });
});