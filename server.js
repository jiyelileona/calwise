const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

const { User, getHash } = require("./models/user");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.post("/register", async (req, res) => {
  let { email, password, passwordConfirmation } = req.body;

  await User.create({ email, password: getHash(password) });

  res.sendStatus(200);
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;


});

app.listen(port, () => {
  console.log("app is running on " + port);
});
