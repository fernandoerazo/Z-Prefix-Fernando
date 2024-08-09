const Item = require('../models/Item');

exports.getItems = async (req, res) => {
  const items = await Item.find({ user: req.user._id });
  res.json(items);
};

exports.createItem = async (req, res) => {
  const { name, description, quantity } = req.body;
  const item = new Item({
    user: req.user._id,
    name,
    description,
    quantity,
  });
  const createdItem = await item.save();
  res.status(201).json(createdItem);
};

exports.getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

exports.updateItem = async (req, res) => {
  const { name, description, quantity } = req.body;
  const item = await Item.findById(req.params.id);

  if (item) {
    item.name = name;
    item.description = description;
    item.quantity = quantity;

    const updatedItem = await item.save();
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

exports.deleteItem = async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    await item.remove();
    res.json({ message: 'Item removed' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};
