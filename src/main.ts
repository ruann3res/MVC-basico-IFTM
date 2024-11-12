import express, { Request, Response } from "express";
import path from "path";
import mongoose from "mongoose";
import { UserRoutes } from "./routes/userRoutes";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGO_URL || "mongodb://localhost:27017/mvcapp",
  {}
);

const userRoutes = new UserRoutes();
app.use("/users", userRoutes.buildRoutes());

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
