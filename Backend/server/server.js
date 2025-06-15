const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/foodRoutes');
const logger = require('./middleware/logger');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(logger);


app.use('/api/foods', foodRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the FoodShare API');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
