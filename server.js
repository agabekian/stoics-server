
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

// require('./config/mongoose.config')
require('./routes/entries.routes')(app)

const PORT = (process.env.PORT)|| 3002 //parseint

// app.get('/')

app.get('*', (request, response) => {
    response.status(404).send('Not availabe');
  });

  app.use((error, request, response, next) => {
    response.status(500).send(error.message);
  })

// app.listen(PORT, () => console.log(
//     'Now listening on port ' + PORT+ typeof(process.env.PORT) + process.env.PORT
//     ))
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
