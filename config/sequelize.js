import { Sequelize } from "sequelize";

export default new Sequelize({
    dialect: "mysql",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});