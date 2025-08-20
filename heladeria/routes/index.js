var express = require('express');
var router = express.Router();
const ind = require('../controllers/indexController')

require('dotenv').config()
console.log(process.env) 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valeria lol' });
});

router.get('/nuevo', ind.getNuevo);
router.post('/creando',  ind.postProbando);



module.exports = router;
