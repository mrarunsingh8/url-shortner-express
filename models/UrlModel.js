import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const UrlModel = sequelize.define("url", {
    nanoid: {
        primaryKey: true,
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
}, {
    sequelize,
    indexes: [{
        unique: true,
        fields: ["nanoid"]
    }],
    createdAt: false,
    paranoid: true
});

await UrlModel.sync({alter: true});


export default UrlModel;