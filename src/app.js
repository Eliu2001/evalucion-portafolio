import express from "express";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/", orderRoutes);

export default app;
