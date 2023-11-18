const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const rfs = require("rotating-file-stream");
const path = require("path");

const connectDatabase = require("./src/configs/db.config.js");

dotenv.config();

connectDatabase();

const port = process.env.PORT || 1337;
const isProduction = process.env.NODE_ENV === "production";
const app = express();

const routes = require("./src/routes/routes.js");

app.use(helmet());
app.use(cors());
app.use(express.json());

// Your API routes

app.get("/", (req, res) => {
  res.json({
    message: "HOME ROUTER",
  });
});

routes(app);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error("Error caught in error handling middleware:", err);
//   res.status(500).json({
//     message: "Internal Server Error",
//     error: err.message,
//   });
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
