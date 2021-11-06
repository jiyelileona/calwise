const { Sequelize } = require("sequelize");

module.exports = new Sequelize({
  dialect: "sqlite",
  storage: "./calwise.db",
});

async function test() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Something is wrong " + error);
  }
}

test();