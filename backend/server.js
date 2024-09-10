import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

//DB Connection
connectDB();

//api endpoint
app.use("/api/food",foodRouter)

// API Endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Listener
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://kayyum:7218578216@cluster0.cvvu3.mongodb.net/?