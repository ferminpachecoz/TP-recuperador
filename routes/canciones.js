// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers *********
const cancionesController = require('../controllers/cancionesController');


// ************ Dirs *********
router.get('/', cancionesController.list)
router.get('/:id', cancionesController.show)
router.post('/', cancionesController.store)
router.delete('/:id', cancionesController.delete)
router.put("/:id", cancionesController.update);


module.exports = router;