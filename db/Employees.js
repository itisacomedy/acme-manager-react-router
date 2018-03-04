const conn = require('./conn');
const { Sequelize } = conn;

const Employees = conn.define('employees', {
  name: Sequelize.STRING
})

module.exports = Employees;
