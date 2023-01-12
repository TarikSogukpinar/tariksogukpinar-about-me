import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import compression from "compression";

// Custom Modules, Packages, Configs, etc.

import indexRoutes from "./router/indexRoutes.js";
import initLimit from "./helpers/limiter/limiter.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

dotenv.config();

app.set("view engine", "ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());

app.use("/", indexRoutes);

initLimit(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// app.use((req, res) => {
//   res.render("404", { PageTitle: "Page Doesn't Exist" });
//   res.status(404);
// });
