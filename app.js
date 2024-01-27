const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const workItems = [];
const items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  const currentDayName = date.getDate();
  res.render("list", { listTitle: currentDayName, newitems: items });
});
app.post("/", function (req, res) {
  console.log(req.body);
  const item = req.body.newTaskInput;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newitems: workItems });
});
app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
