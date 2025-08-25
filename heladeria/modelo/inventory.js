const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  item: { type: String, required: true },
  qty: { type: Number, required: true },
  tags: { type: [String], default: [] },
  size: {
    h: { type: Number },
    w: { type: Number },
    uom: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema, 'inventory');
