const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const path = require("path");

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// console.log(path.join(__dirname, "../templates/partials"));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errormsg: "Oops! Page Not Found",
  });
});

app.listen({ port }, () => {
  console.log(`"listening at port ${port}"`);
});
