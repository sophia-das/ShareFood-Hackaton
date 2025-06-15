const express = require('express');
const router = express.Router();
const { getFoodList, addFoodItem } = require('../controllers/foodController');

// GET /api/foods
router.get('/', getFoodList);

// POST /api/foods
router.post('/', addFoodItem);

module.exports = router;
