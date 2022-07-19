const express = require("express");
const cookieParser = require("cookie-parser");
const postgreClient = require("./helpers/postgreClient");
const dotenv = require("dotenv");
const indexRoutes = require("./router/indexRoutes");
const contactRoutes = require("./router/contactRoutes");
const app = express();
dotenv.config();

app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  postgreClient.connect((err) => {
    if (err) {
      console.log(err);
      console.log("errorhere");
    } else {
      console.log("Postgre connection successful");
    }
  });
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
