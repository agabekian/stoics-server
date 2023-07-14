const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("It says - established connection to: ", process.env.DB_URL))
    .catch(err => console.log("Something went wrong while connecting", err))