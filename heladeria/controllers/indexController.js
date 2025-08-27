const Inventory = require('../modelo/inventory');

const getNuevo = (req, res) => {
  try {
    res.send('Necesito get info!');
  } catch (error) {
    res.send(error);
  }
};

const postProbando = (req, res) => {
  try {
    res.send('Probando que tenga un endpoint');
  } catch (error) {
    res.send(error);
  }
};


const createInventory = async (req, res) => {
  try {
    const inv = new Inventory(req.body);
    await inv.save();
    res.status(201).json(inv);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getInventories = async (req, res) => {
  try {
    const invs = await Inventory.find();
    res.json(invs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateInventory = async (req, res) => {
  try {
    const inv = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inv) return res.status(404).json({ error: 'Item no encontrado' });
    res.json(inv);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteInventory = async (req, res) => {
  try {
    const inv = await Inventory.findByIdAndDelete(req.params.id);
    if (!inv) return res.status(404).json({ error: 'Item no encontrado' });
    res.json({ message: 'Item eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWeatherApi = async (req, res) => {
  try {
    api = process.env.WEATHER_API_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={102}&lon={291}&exclude={daily}&appid={api}`);
    const data = await response.json();
    res.json(data);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
    getNuevo,
    postProbando,
    getInventories,
    updateInventory,
    deleteInventory,
    getWeatherApi,
    createInventory
};