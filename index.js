const express = require("express"); // import express module
const cors = require("cors");
const app = express(); //app extend

app.use(express.json()); // json body from client
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" })); // cors origin

const { category } = require("./src/route/category.route"); // import
const { role } = require("./src/route/role.route");
category(app); // calling function route
role(app);

app.get("/", (req, res) => {
  // init route
  res.send("Welcome API Node");
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
