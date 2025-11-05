import e from "express";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = e();
app.use(e.json());

app.use("/users", userRoutes);
app.use("/", orderRoutes);

export default app;