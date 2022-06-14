const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname,'index.html'))

  const personArray = [
    { name: "osman", id: 1 },
    { name: "osman2", id: 2 },
    { name: "osman3", id: 3 },
    { name: "osman4", id: 4 },
  ];
  const dersAdi = "nodeJS";
  const h1tag="<h1>bu bir h1 tagıdır</h1>"
  res.render("index", { kisiler: personArray, ders: dersAdi ,h1tag});
});

app.listen(3000, () => {
  console.log("listening port of 3000");
});
