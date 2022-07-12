const express = require("express");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./helpers/connectDatabase");
const dotenv = require("dotenv");
const indexRoutes = require("./router/indexRoutes");

const app = express();
dotenv.config();

connectDatabase();

app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
  console.log("Port Listening");
});

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", indexRoutes);

app.use((req, res) => {
  res.render("404", { title: "Sayfa Bulunamadı" });
  res.status(404);
});
