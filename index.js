import app from "./src/app.js";
import { sequelize } from "./src/models/index.js";


const PORT = process.env.PORT || 3000;

const starServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync({ alter: true});
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

starServer();