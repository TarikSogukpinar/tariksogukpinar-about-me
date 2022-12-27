const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const indexRoutes = require("./router/indexRoutes");
const contactRoutes = require("./router/contactRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
 
});

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());



app.use("/", indexRoutes);
app.use("/contact", contactRoutes);
app.use("/success", contactRoutes);


// app.use((req, res) => {
//   res.render("404", { PageTitle: "Page Doesn't Exist" });
//   res.status(404);
// });
