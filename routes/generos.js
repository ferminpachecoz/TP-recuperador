// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers *********
const generosController = require('../controllers/generosController');

// ************ Dirs *********
router.get('/', generosController.list)



module.exports = router;