import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

import { connectedDB } from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhooks.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is working properly");
});

// IMPORTANT: raw parser ONLY for this route
app.post(
  "/api/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebHooks
);

const startServer = async () => {
  await connectedDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
