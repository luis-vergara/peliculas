'use strict'

var MovieController = require('../controllers/movie-controller'),
    express = require('express'),
    router = express.Router()

router
    .get('/',MovieController.getAll)
    .post('/',MovieController.create)
    .get('/editar/:movie_id',MovieController.getOne)
    .put('/actualizar/:movie_id',MovieController.update)
    .delete('/eliminar/:movie_id',MovieController.delete)
    //Vista
    .get('/agregar',MovieController.addForm)
    .use(MovieController.error404)

module.exports = router



//.post('/actualizar/:movie_id',MovieController.update)
//.post('/eliminar/:movie_id',MovieController.delete)