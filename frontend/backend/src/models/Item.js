const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
