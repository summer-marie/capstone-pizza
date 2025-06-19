# Capstone Pizza App – Core Features

## Customer Features

### Menu Browsing

Customers can view menu of pizzas, each with images, descriptions, ingredients, and prices. The menu displays consistent card layouts and ingredient details for easy browsing.

### Custom Pizza Builder

Customers can create their own pizzas by selecting crust, sauce, meats, veggies, and cheese. The builder auto-calculates the price based on selected ingredients and displays a live preview.

### Cart & Ordering

Customers can add pizzas to their cart, review their selections, and place orders. The checkout form validates user information before allowing submission.

### About & Purpose Pages

Dedicated pages explain the business’s mission, purpose, and commitment to quality ingredients and community.

---

## Admin Features

### Secure Admin Login

Admins access a secure login page to authenticate before managing the app.

- Built with React for the frontend and Express/Node.js for the backend.
- Uses JWT authentication and Passport.js for secure login sessions.
- Passwords are hashed and never stored in plain text.

### Sidebar Navigation

A persistent sidebar allows admins to quickly navigate to pages.

- Implemented as a reusable React component (`AdminSidenav.jsx`).
- Uses React Router for seamless client-side navigation between admin pages.
- Styled with Tailwind CSS for a consistent look and responsive design.

### Menu Management

Admins can add, update, or delete pizzas from the menu. Each pizza can have an image, ingredient list, and price, with auto-calculation based on ingredients.

- CRUD operations (Create, Read, Update, Delete) for pizzas using React forms and Redux actions.
- Image uploads handled with Multer middleware on the Express backend.
- Price auto-calculation logic in both frontend (React) and backend (Node.js/Express).
- MongoDB/Mongoose used for storing pizza data.

### Ingredient Management

Admins can view, add, edit, or remove ingredients. Ingredients are categorized (base, sauce, meat, veggie, cheese) and can be updated in bulk.

- Ingredient data managed with Redux for state consistency.
- Table and modal UI built with React and Tailwind CSS.
- Backend endpoints (Express) allow adding, updating, and deleting ingredients.
- Ingredient schema and validation handled with Mongoose.

### Order Management

Admins can view all open orders, update their status, and archive completed or cancelled orders. Completed orders are stored for history and analytics.

- Orders fetched and updated using Redux async actions and RESTful API endpoints.
- Status updates use controlled React dropdowns and dispatch Redux actions.
- Archived/completed orders are stored and displayed for analytics.
- Real-time UI feedback with loading spinners and status badges.

### Customer Messages

Admins can read, reply to, and delete customer messages. The inbox supports batch actions and marks messages as read.

- Inbox built with React, supporting reading, replying, and deleting messages.
- Message data managed with Redux and fetched via Express API endpoints.
- Replies and deletions update the backend and Redux state.
- Batch actions and read/unread status handled in the UI.

---

## Technical Features

### Responsive Design

The app is fully responsive, ensuring a seamless experience on desktop and mobile devices.

- Built with React and styled using Tailwind CSS utility classes.
- Uses CSS Flexbox and Grid layouts for adaptive card and form layouts.
- Mobile-first design principles ensure usability on all screen sizes.

### Image Uploads

Admins can upload pizza images, which are stored and served from the backend with consistent sizing and aspect ratio.

- Image uploads handled with Multer middleware in the Express backend.
- Images are stored in a dedicated server directory and served via static routes.
- Frontend uses `object-cover` and fixed aspect ratio containers (Tailwind CSS) for uniform display.

### Validation & UX

Forms use required fields and disable submit buttons until all information is entered, improving data quality and user experience.

- HTML5 validation (`required` attributes) and custom React state checks.
- Submit buttons are disabled until all fields are valid.
- Real-time feedback and error messages guide users through form completion.

### State Management

Redux is used for managing global state, including orders, menu items, ingredients, and authentication.

- Redux Toolkit simplifies slice creation and async logic.
- State is shared across components for consistent UI updates.
- Actions and reducers handle CRUD operations and authentication flows.

### Error Handling

The app provides user feedback for errors (e.g., failed uploads, invalid form submissions) and uses loading spinners for async actions.

- Try/catch blocks and error boundaries in React components.
- Redux state tracks loading and error states for async actions.
- Custom loading spinners and error messages enhance user experience.

---

**Summary:**  
Capstone Pizza is a full-featured pizza ordering platform with robust admin tools, a customizable menu, and a focus on quality, community, and user experience.
