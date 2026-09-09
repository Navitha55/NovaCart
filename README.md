# 🛒 E-Commerce Mini App

A modern React-based E-Commerce application built as a comprehensive React skill test. This project combines routing, API integration, Redux Toolkit, Context API, authentication simulation, performance optimization, custom hooks, error boundaries, and lazy loading.

## 📌 Project Overview

The E-Commerce Mini App allows users to:

* Browse products fetched from an external API
* Search and filter products
* View individual product details
* Add products to a shopping cart
* Increase or decrease product quantities
* Remove products from the cart
* View the total cart amount
* Toggle between Light and Dark themes
* Log in using simulated authentication
* Access the checkout page through protected routing
* Complete a checkout form
* Persist selected data using LocalStorage

This project was built to practice important React concepts in a structured and production-style application.

---

## ✨ Features

### 🏠 Product Listing

* Fetch products from an external API
* Display product image, title, price, and other details
* Search products dynamically
* Loading and error states

### 🛍️ Shopping Cart

* Add products to the cart
* Increase product quantity
* Decrease product quantity
* Remove individual products
* Clear the cart
* Automatically calculate total price
* Cart state managed using Redux Toolkit

### 🔐 Authentication

* Simulated login functionality
* Authentication handled using Context API
* Protected checkout route
* Redirect unauthenticated users to the login page
* Authentication state can be persisted using LocalStorage

### 🎨 Theme Management

* Light and Dark theme support
* Theme managed using Context API
* Theme preference stored in LocalStorage

### 🌐 Routing

React Router is used to manage multiple pages.

Available routes:

| Route          | Page            |
| -------------- | --------------- |
| `/`            | Home            |
| `/cart`        | Shopping Cart   |
| `/product/:id` | Product Details |
| `/checkout`    | Checkout        |
| `/login`       | Login           |

### ⚡ Performance Optimization

The application demonstrates React performance techniques:

* `useMemo`
* `useCallback`
* `React.lazy`
* `Suspense`

### 🛡️ Error Handling

* Error Boundary implementation
* Friendly fallback UI when a component crashes
* API error handling
* Loading states

---

## 🧠 React Concepts Practiced

### `useState`

Used for:

* Search functionality
* Local UI states
* Form inputs
* Loading and error states

### `useEffect`

Used for:

* Fetching API data
* LocalStorage persistence
* Theme updates
* Authentication persistence

### `useReducer`

Used for:

* Complex checkout form state management

### `useRef`

Used for:

* Automatically focusing input fields
* Accessing DOM elements when required

### `useMemo`

Used to:

* Memoize filtered product lists
* Avoid unnecessary recalculations

### `useCallback`

Used to:

* Memoize event handler functions
* Optimize component rendering

### Custom Hooks

Custom hooks are used to organize reusable logic.

Examples:

* `useAuth`
* `useCart`

---

## 📦 State Management

### Redux Toolkit

Redux Toolkit manages the shopping cart globally.

Cart functionality includes:

* Add Item
* Remove Item
* Increase Quantity
* Decrease Quantity
* Calculate Total Price
* Clear Cart

The project uses:

* `configureStore`
* `createSlice`
* `useSelector`
* `useDispatch`

---

## 🌍 Context API

Context API is used for global application states.

### Auth Context

Handles:

* User login
* User logout
* Authentication state
* Protected routes

### Theme Context

Handles:

* Light theme
* Dark theme
* Theme toggle
* LocalStorage persistence

---

## 📡 API Integration

Products are fetched from a public API.

The application includes:

* API requests
* Loading states
* Error handling
* Dynamic product rendering

---

## ⚡ Lazy Loading

Some pages are loaded using:

```javascript
React.lazy()
```

and rendered using:

```javascript
<Suspense>
```

This improves performance by loading components only when they are needed.

---

## 🛡️ Error Boundary

The application includes an Error Boundary component to catch rendering errors.

The Error Boundary provides:

* Error detection
* Fallback UI
* Better user experience when components fail

---

## 🗂️ Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── ErrorBoundary.jsx
│   ├── Loader.jsx
│   └── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── ProductDetail.jsx
│   ├── Checkout.jsx
│   └── Login.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── redux/
│   ├── store.js
│   └── cartSlice.js
│
├── hooks/
│   ├── useAuth.js
│   └── useCart.js
│
├── styles/
│   └── App.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Tech Stack

* ⚛️ React
* ⚡ Vite
* 🧭 React Router DOM
* 🗃️ Redux Toolkit
* 🔄 React Redux
* 🌐 Axios / Fetch API
* 🎨 CSS
* 💾 LocalStorage

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/Navitha55/YOUR-REPOSITORY-NAME.git
```

Navigate to the project folder:

```bash
cd YOUR-REPOSITORY-NAME
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in your terminal.

---

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🎯 Learning Outcomes

Through this project, I practiced:

* React component architecture
* API integration
* Redux Toolkit state management
* React Router
* Protected routes
* Context API
* Authentication simulation
* Theme management
* Custom hooks
* `useState`
* `useEffect`
* `useReducer`
* `useRef`
* `useMemo`
* `useCallback`
* Error Boundaries
* Lazy Loading
* Suspense
* LocalStorage
* Performance optimization
* Responsive UI design

---

## 🔮 Future Improvements

Possible future enhancements include:

* Real backend authentication
* Payment gateway integration
* Product categories
* Product ratings and reviews
* Wishlist functionality
* Order history
* Backend API integration
* User profiles
* Advanced product filtering
* Pagination

---

## ⭐ Project Goal

This project was created as a comprehensive React practice application to combine multiple important React concepts into one structured, scalable, and practical project.

**Learn React by building real projects. 🚀**
