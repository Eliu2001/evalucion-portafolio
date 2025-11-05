import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import {User} from './user.js';

export const Order = sequelize.define("orders", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    }, 
    product : {
        type : DataTypes.STRING,
        allowNull : false,

    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false, 
    },
    date_ordered : {
        type : DataTypes.DATE, 
        allowNull : false,
        defaultValue : DataTypes.NOW,
    },
});

// Association 
User.hasMany(Order, { foreignKey : 'userId', onDelete : 'CASCADE'});
Order.belongsTo(User, { foreignKey : 'userId'});