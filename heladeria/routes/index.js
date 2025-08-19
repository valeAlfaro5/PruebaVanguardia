var express = require('express');
var router = express.Router();


require('dotenv').config()
console.log(process.env) 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valeria lol' });
});

router.get('/nuevo', (req, res) => {
  res.send('Necesito get info!')
})

router.post('/creando', (req, res) => {
  res.send('Probando que tenga un endpoint')
})



module.exports = router;
