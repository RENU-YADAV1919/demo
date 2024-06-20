const express = require('express')
const methodOverride = require('method-override');

const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

 app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', './views'); // Set the views directory

app.get('/form', (request, response) => {
    response.render('form');
  });
  


  
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

  
app.get('/users', (request, response) => {
  db.getUsers((error, results) => {
    if (error) {
      response.status(500).send('Error fetching users');
    } else {
      response.render('list', { users: results });
    }
  });
});

  const db = require('./app')
  app.post('/users', db.createUser)
  app.delete('/users/:id', db.deleteUser);
  app.get('/users', db.getUsers)
  
 
  


  

