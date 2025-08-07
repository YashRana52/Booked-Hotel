import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectedDB } from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhooks.js";
connectedDB();
const app = express();
app.use(cors()); // enable cross-origin resorce sharing

//middlwares
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("api kam kr rha h achhe se ");
});

//API to clerk webhooks

app.use("/api/clerk", clerkWebHooks);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
