const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

const { Cat } = require("./db.js");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.get("/cats", async (req, res) => {
  let cats = await Cat.findAll();

  res.json(cats.map((cat) => cat.name));
});

app.post("/cats", async (req, res) => {
  let { name, age } = req.body;

  await Cat.create({ name, age });

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log("app is running on " + port);
});
