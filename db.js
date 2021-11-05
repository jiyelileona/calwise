const { Sequelize, DataTypes } = require("sequelize");
const { ModuleGraph } = require("vite");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./calwise.db",
});

async function test() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("something is wrong " + error);
  }
}

test();

const Cat = db.define("Cat", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

Cat.sync();

Cat.findAll().then((cats) => {
  let names = cats.map((cat) => cat.name);
  console.log(names);
});

module.exports = { Cat };