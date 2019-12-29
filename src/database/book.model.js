const Sequelize = require("sequelize");
const database = require("./core");

const Book = database.define("Book",{
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 10
  }
});

module.exports = Book;