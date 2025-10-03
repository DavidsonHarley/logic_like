import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import ideaRoutes from "./routes/ideas.routes";
import { ipMiddleware } from "./middleware/ip-middleware";

const { sequelize } = require("../db/models");

const app = express();
const { PORT, CLIENT_URL } = process.env;

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", true);
app.use(ipMiddleware);

app.use("/api", ideaRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("База данных успешно подключена!");
  } catch (error) {
    console.error("База данных не подключена:", error);
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
