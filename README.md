# Capstone Pizza App – Core Features

## Customer Features

### Menu Browsing
Customers can view a visually appealing menu of pizzas, each with images, descriptions, ingredients, and prices. The menu displays consistent card layouts and ingredient details for easy browsing.

### Custom Pizza Builder
Customers can create their own pizzas by selecting crust, sauce, meats, veggies, and cheese. The builder auto-calculates the price based on selected ingredients and displays a live preview.

### Cart & Ordering
Customers can add pizzas to their cart, review their selections, and place orders. The checkout form validates user information before allowing submission.

### Order Tracking
Customers can view the status of their orders (e.g., open, in progress, completed) and receive updates as their order moves through the process.

### About & Purpose Pages
Dedicated pages explain the business’s mission, purpose, and commitment to quality ingredients and community.

---

## Admin Features

### Secure Admin Login
Admins access a secure login page to authenticate before managing the app.

### Sidebar Navigation
A persistent sidebar allows admins to quickly navigate between orders, menu management, ingredients, and messages.

### Menu Management
Admins can add, update, or delete pizzas from the menu. Each pizza can have an image, ingredient list, and price, with auto-calculation based on ingredients.

### Ingredient Management
Admins can view, add, edit, or remove ingredients. Ingredients are categorized (base, sauce, meat, veggie, cheese) and can be updated in bulk.

### Order Management
Admins can view all open orders, update their status, and archive completed or cancelled orders. Completed orders are stored for history and analytics.

### Customer Messages
Admins can read, reply to, and delete customer messages. The inbox supports batch actions and marks messages as read.

---

## Technical Features

### Responsive Design
The app is fully responsive, ensuring a seamless experience on desktop and mobile devices.

### Image Uploads
Admins can upload pizza images, which are stored and served from the backend with consistent sizing and aspect ratio.

### Validation & UX
Forms use required fields and disable submit buttons until all information is entered, improving data quality and user experience.

### State Management
Redux is used for managing global state, including orders, menu items, ingredients, and authentication.

### Error Handling
The app provides user feedback for errors (e.g., failed uploads, invalid form submissions) and uses loading spinners for async actions.

---

**Summary:**  
Capstone Pizza is a full-featured pizza ordering platform with robust admin tools, a customizable menu, and a focus on quality, community, and user experience.