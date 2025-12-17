import express from "express";
import cors from "cors";
import config from "./db/config.js"

import userRoutes from "./routes/user.routes.js";
import homeRoutes from "./routes/home.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// api routes
app.use("/api/users", userRoutes);
app.use("/api/home", homeRoutes);

// start server
app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});
