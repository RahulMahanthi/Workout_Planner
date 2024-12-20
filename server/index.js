import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "mongoose";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import entryRoute from "./routes/entries.js";
import routineRoute from "./routes/routines.js";
import mealRoute from "./routes/meals.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from 'morgan'; // Correct import for ES modules

// Use morgan middleware




// Initialize express app
const app = express();
app.use(morgan('dev'));

// Configure environment variables
dotenv.config();

// Set port
const PORT = process.env.PORT || 7700;

// MongoDB connection function
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

// Handle MongoDB disconnection
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true); // Allow all origins
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"], // Add common HTTP methods
  })
);


// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/entries", entryRoute);
app.use("/api/routines", routineRoute);
app.use("/api/meals", mealRoute);

// Home route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  connect();
});
