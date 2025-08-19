var express = require('express');
var router = express.Router();


require('dotenv').config()
console.log(process.env) 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valeria lol' });
});

app.get('/', (req, res) => {
  res.send('Necesito get info!')
})

app.post('/', (req, res) => {
  res.send('Probando que tenga un endpoint')
})



module.exports = router;
