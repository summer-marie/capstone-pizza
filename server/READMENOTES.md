1. Create an **Ingredient** model in your database with the following fields: `id`,
`name`, `price` (in cents or another currency), and any other relevant attributes like
`is_vegan`, `is_gluten_free`, etc.
2. On the backend, create a **Pizza** model that belongs to one **Ingredient** model
through a many-to-many relationship (using a join table if necessary). This way, you can
associate multiple ingredients with each pizza and track their prices.
3. For the ordering flow, when users select ingredients for their pizza, store the
associated ingredient IDs in the session or local storage of your application.
4. Once users are ready to submit their order, send a request to your backend server
with the selected ingredient IDs and any other relevant data like base type, size, and
special instructions.
5. On the server-side, retrieve the corresponding ingredients based on the provided IDs
from the database.
6. Calculate the total cost for each pizza by iterating through the ingredients and
multiplying their prices by the quantity selected.
7. Include any taxes or delivery fees in the calculation if necessary.
8. Display the calculated total to the user before finalizing the order.
9. Save the order details, including the ingredient IDs, total cost, and any other
relevant data, in your database for future reference.
10. Implement a payment gateway integration on the frontend of your app to collect
payments from users.


 To calculate the total dollar amount on the frontend, you can create a JavaScript
function that sums the prices of selected ingredients and returns the result. Here's an
example using ReactJS:

1. Define a state variable to store the selected ingredients and their quantities:

```jsx
// src/components/PizzaOrderForm.jsx
const [selectedIngredients, setSelectedIngredients] = useState({});

// Add your ingredient selection logic here

function handleInputChange(event) {
  const { name, value } = event.target;
  const quantity = parseInt(value);

  // Update the selected ingredients state
  setSelectedIngredients((prevState) => ({
    ...prevState,
    [name]: (prevState[name] || 0) + quantity,
  }));
}
```

2. Create a function to calculate the total cost of the selected ingredients:

```jsx
// src/components/PizzaOrderForm.jsx
async function calculateTotal() {
  let total = 0;
  const basePrice = BASE_PRICE || 8; // Adjust the base price as needed

  for (const [ingredientName, quantity] of Object.entries(selectedIngredients)) {
    if (!INGREDIENTS[ingredientName]) continue; // Skip unrecognized ingredients

    const ingredient = INGREDIENTS[ingredientName];
    total += ingredient.price * quantity + (basePrice * (quantity - 1)); // Add the
price for each topping and the base price for the crust
  }

  return total;
}
```

3. Update your order summary component to display the calculated total:

```jsx
// src/components/PizzaOrderSummary.jsx
function PizzaOrderSummary() {
  const [total, setTotal] = useState(0);

  // Call calculateTotal function on component mount and whenever selected ingredients
change
  useEffect(() => {
    async function updateTotal() {
      const totalCost = await calculateTotal();
      setTotal(totalCost.toFixed(2));
    }
    updateTotal();
  }, [selectedIngredients]);

  return (
    <div>
      // Your order summary component logic here
      <h3>Total: ${total}</h3>
    </div>
  );
}
```
 A many-to-many (N:M) relationship in a database refers to a type of association between
two tables where one or more records from one table can be associated with zero, one, or
multiple records from another table, and vice versa. In other words, multiple records in
either table can relate to the same record(s) in the other table.

Here's an example using a pizza app: A single pizza may have multiple toppings (e.g.,
pepperoni, mushrooms, onions), while each topping can be used on multiple pizzas. To
represent this relationship in the database, you would need to create a join table that
connects the `Pizza` and `Topping` tables:

- The `Pizzas` table might have columns for `id`, `name`, `size`, `base`, and any other
relevant attributes.
- The `Toppings` table might have columns for `id`, `name`, `is_vegan`,
`is_gluten_free`, etc.
- The join table (let's call it `Pizza_Topping`) would have columns for `pizza_id`,
`topping_id`, and a unique constraint on both columns to ensure no duplicate entries.
This join table allows you to associate multiple toppings with a single pizza and vice
versa.

You can then create associations between the tables using foreign keys. For example:

- A record in the `Pizzas` table might have an `id` of 1, `name` of "Margherita", `size`
of "Medium", and `base` of "Thin".
- In the join table `Pizza_Topping`, you can store multiple records with a `pizza_id` of
1 and different `topping_id` values, such as 2 (representing pepperoni), 3 (mushrooms),
and 4 (onions).
- Similarly, each topping record in the `Toppings` table can be associated with multiple
pizzas through records in the `Pizza_Topping` join table.

This design allows for maximum flexibility in the data model and ensures that you can
create complex relationships between tables without having to manually enforce
constraints at the application level.


2. Create a `pizza.model.js` file with the following content:

```javascript
const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  base: { type: String, required: true },
  sauce: { type: String, required: true },
  toppings: [{ type: String }],
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Pizza', pizzaSchema);
```

3. Create an `order.model.js` file with the following content:

```javascript
const mongoose = require('mongoose');
const pizzaModel = require('./pizza.model');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pizzas: [{ type: { $ref: 'Pizza' }, quantity: Number }],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
```

4. Create a `user.model.js` file with the following content:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
```

5. Create an `index.js` file to set up the Express app and connect to MongoDB:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const pizzaModel = require('./pizza.model');
const orderModel = require('./order.model');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

// Create Express app and set up middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(ejsLayouts);

// Define routes for each entity (users, orders, pizzas)
app.get('/', (req, res) => {
  // Render home page or main layout with navigation and footer
});

app.get('/pizzas', async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.render('pizzas', { pizzas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching pizzas');
  }
});

app.get('/orders/:id', async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    res.render('order', { order });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching order');
  }
});

app.listen(3000, () => console.log('App listening on port 3000'));
```