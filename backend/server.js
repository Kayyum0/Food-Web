import 'dotenv/config'; // Add this at the top
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

// Verify JWT_SECRET
console.log('JWT_SECRET:', process.env.JWT_SECRET);

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);

// API Endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

// Listener
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
