const { DataTypes } = require("sequelize");
const db = require("../db");

const bcrypt = require("bcrypt");

const User = db.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync();

async function getHash(password) {
  return await bcrypt.hash(password, 10);
}

async function verify(password, hash) {
  return await bcrypt.compare(password, hash);
}

function validateEmail(email) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(regexEmail);
}

module.exports = { User, getHash, verify, validateEmail };
