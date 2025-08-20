var router = require('express').Router();

const heladosController = require('../controllers/helado');

router.get("/main", heladosController.getMain);

module.exports = router;