// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers *********
const mainController = require('../controllers/mainController');


// ************ Dirs *********
router.get('/', mainController.index);

// router.post('/', )
// router.get('/:id', )
// router.put('/:id', )
// router.delete('/:id', )


module.exports = router;