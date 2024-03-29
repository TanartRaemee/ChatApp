import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectMongoDB from "./db/connectMongoDB.js";
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   //http://localhost:5000/
//   res.send("Hello world!!!");
// });

server.listen(PORT, () => {
  connectMongoDB();
  console.log(`server Running on port ${PORT}`);
});
