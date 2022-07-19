const express = require("express");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
const indexRoutes = require("./router/indexRoutes");
const contactRoutes = require("./router/contactRoutes");
const app = express();
dotenv.config();

app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
  console.log("Port Listening");
});

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/", indexRoutes);
app.use("/contact", contactRoutes);

app.use((req, res) => {
  res.render("404", { title: "Sayfa Bulunamadı" });
  res.status(404);
});
