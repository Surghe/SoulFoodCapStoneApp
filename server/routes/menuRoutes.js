const express = require('express');
const router = express.Router();
const menuImport = require('../models/MenuItems.mjs'); // adjust the path to your model
const authenticateToken = require('../midware/auth.js'); // middleware for JWT validation
const Menu = menuImport.default
// POST /api/menu - Add a new menu item
router.post('/', async (req, res) => {
  console.log('✅ Backend: Received request to add menu item:', req.body);

  try {
    const newItem = new Menu(req.body);
    const savedItem = await newItem.save();

    console.log('✅ Backend: Menu item saved to DB:', savedItem);
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('❌ Backend error saving menu item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  
  let allMenus = await Menu.find({});

console.log(Menu);
res.json(allMenus);

});


router.put('/:id', async (req, res) => {
  
  const updatedMenu = await Menu.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedMenu);
});


router.delete('/:id', async (req, res) => {
  // Specify Action
  const deletedMenu = await Menu.findByIdAndDelete(req.params.id);

  // return result
  res.json(deletedMenu); // return deleted itm. optional. can return delete message
});


module.exports = router;