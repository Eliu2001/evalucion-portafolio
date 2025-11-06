// src/models/index.js
import { sequelize } from "../config/database.js";
import { User } from "./user.js";
import { Order } from "./order.js";

// Relación uno a muchos
User.hasMany(Order, { foreignKey: "user_id", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "user_id" });

export { sequelize, User, Order };
