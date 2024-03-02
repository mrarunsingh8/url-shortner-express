import { Sequelize } from "sequelize";

export default new Sequelize({
    dialect: "mysql",
    database: "url-shortner",
    host: "localhost",
    username: "root",
    password: ""
});