import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use("/", (req, res)=>{
    res.status(200).json({
        success: "true",
        route: "/"
    });
});

app.listen(3000, ()=>{
    console.log(`Server is started on port: 3000`);
});