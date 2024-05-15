import express from "express";
import cors from "cors";
import dbConnection from "./config/dbConnection.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

dbConnection();

app.use("/api/food", foodRouter);
app.use("/api/images", express.static('uploads'));

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(3000, () => {
  console.log("App running on port ", port);
});


// 03:57:09