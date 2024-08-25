const express = require("express");
const cors = require("cors");
const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" })); 

const { category } = require("./src/routes/category.route"); 
const { role } = require("./src/routes/role.route");
category(app); 
role(app);

app.get("/", (req, res) => {
  res.send("Welcome API Node");
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
