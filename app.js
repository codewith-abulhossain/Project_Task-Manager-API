import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import {
  DATABASE,
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URI_ENCODE,
  WEB_CACHE,
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

// App ues default Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URI_ENCODE }));
app.use(helmet());

// App use Limiter
const Limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(Limiter);

// cache
app.set("etag", WEB_CACHE);

// Database Connect
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(() => {
    console.log("MongoDB disconnected");
  });

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server Started on Port" + PORT);
});
