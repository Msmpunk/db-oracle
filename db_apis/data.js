const database = require('../services/database.js');
 
const baseQuery = 
 `select employee_id "id",
    first_name "first_name",
    last_name "last_name",
  from employees`;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.employee_id = context.id;
 
    query += `\nwhere employee_id = :employee_id`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;