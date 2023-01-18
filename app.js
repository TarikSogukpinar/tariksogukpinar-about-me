const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const helmet = require('helmet')
const compression = require('compression')
const rateLimit = require("express-rate-limit");

// Custom Modules, Packages, Configs, etc.

const indexRoutes = require("./router/indexRoutes.js");


const app = express();

dotenv.config();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet())
app.use(compression())

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use("/", indexRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use((req, res) => {
  res.render("404", { PageTitle: "Page Doesn't Exist" });
  res.status(404);
});
