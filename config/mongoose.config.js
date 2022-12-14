const mongoose = require('mongoose')
require('dotenv').config();
// mongoose.connect("mongodb://localhost/crmdb",{
mongoose.connect(process.env.DB_URL, {
    // crmdb is used by multiple projects
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connection so a local ? ", process.env.DB_URL))
    .catch(err => console.log("Something went wrong while connecting", err))