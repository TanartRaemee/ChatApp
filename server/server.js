import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   //http://localhost:5000/
//   res.send("Hello world!!!");
// });

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`server Running on port ${PORT}`);
});
