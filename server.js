require('dotenv').config();
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./config/mongoose.config')
require('./routes/entries.routes')(app)

app.get('*', (request, response) => {
  response.status(404).send('Route does not exist');
});

PORT = process.env.PORT||3002
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))



