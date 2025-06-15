let foodItems = [
  { id: 1, name: "Pizza", quantity: 5 },
  { id: 2, name: "Rice Bowl", quantity: 3 }
];

// GET
const getFoodList = (req, res) => {
  res.json(foodItems);
};

// POST 
const addFoodItem = (req, res) => {
  const { name, quantity } = req.body;
  const newItem = {
    id: foodItems.length + 1,
    name,
    quantity
  };
  foodItems.push(newItem);
  res.status(201).json(newItem);
};

module.exports = { getFoodList, addFoodItem };
