const conn = './conn';
const Sequelize = conn.Sequelize;

const Employees = conn.define('employees',{
  name: Sequelize.STRING
})

module.exports = Employees;
