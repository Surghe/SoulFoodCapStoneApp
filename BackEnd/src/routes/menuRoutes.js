const express = ('express');
const router = express.Router();
const Menu = ('../models/Menu'); // adjust the path to your model
const authenticateToken = ('../middleware/auth'); // middleware for JWT validation

// POST /api/menu - Add a new menu item
router.post('/api/menu', authenticateToken, async (req, res) => {
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

module.exports = router;