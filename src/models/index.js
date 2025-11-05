import { sequelize } from "../config/database.js";
import { User } from "./user.js";
import { Order } from "./order.js";

User.hasMany(Order, { foreignKey: "user_id", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "user_id" });

export { sequelize, User, Order };