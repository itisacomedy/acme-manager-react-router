const conn = require('./conn');
const Employees = require('./Employees');

Employees.belongsTo(Employees, { as:'manager'});
Employees.hasMany(Employees,{ as:'manages', foreignKey: 'managerId'});

const sync = () => {
  return conn.sync({ force: true})
}

const seed = () => {
  return Promise.all([
    Employees.create({ name: 'moe'}),
    Employees.create({ name: 'larry'}),
    Employees.create({ name: 'curly'})
  ])
  .then(([moe,larry,curly]) => {
    return Promise.all([
      larry.setManager(moe),
      curly.setManager(moe)
    ])
  })
}

module.exports = {
  sync,
  seed,
  models: {
    Employees
  }
}
