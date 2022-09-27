const controller = require('../controllers/controller')

module.exports = app => {
    //C
    app.post('/api/entries', controller.createProduct)
    app.post('/api/users', controller.createUser)
    
    //R
    app.get('/api/entries', controller.getAllProducts)
    app.get('/api/entries/:id', controller.getProduct)
    // app.get('/api/users', controller.getUsers)
    // // U
    // app.put('/api/entries/:id', controller.updateProduct)
    app.patch('/api/entries/:id', controller.addComment)
    //D
    app.delete('/api/entries/:id', controller.deleteProduct)
    app.patch('/api/entries/cut/:id/:cid', controller.deleteComment)
}

