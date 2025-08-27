var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const ind = require('../controllers/indexController')

require('dotenv').config()
// console.log(process.env) 

//conexion de mongodb
async function conectarDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valeria lol' });
});

router.get('/nuevo', ind.getNuevo);
router.post('/creando',  ind.postProbando);
router.post('/nuevo-inventory', ind.createInventory);
router.get('/inventory', ind.getInventories);
router.put('/edit-inventory/:id', ind.updateInventory);
router.delete('/inventory/:id', ind.deleteInventory);
router.get('/weather', ind.getWeatherApi);


router.get('/connect', (req, res) => {
  conectarDB();
  res.send('Conexion establecida!')
})



module.exports = router;
