const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'employee_db',
  password: '123456',
  port: 5432,
})

const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO employee (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM employee WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`employee deleted with ID: ${id}`)
    })
  }

  const getUsers = (callback) => {
    pool.query('SELECT * FROM employee ORDER BY id ASC', (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results.rows);
    });
  };


  module.exports = {
  createUser,
  deleteUser,
  getUsers
    }