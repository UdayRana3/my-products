import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<!doctype html>
<html lang="en">
  <head>
    <title>My Products</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header>
      <h1>My Store</h1>
      <div class="search-box">
        <input type="text" id="searchInput" />
        <button>Search</button>
      </div>
    </header>
    <section>
      <h2>Items</h2>

      <div id="items"></div>
    </section>

    <section class="cart">
      <h2>My Cart</h2>

      <div id="cartItems"></div>

      <hr />

      <h3>
        Total Items:
        <span id="totalItems">0</span>
      </h3>

      <h3>
        Total Price:
        <span id="totalPrice">0</span>
      </h3>
    </section>
    <script src="items.js"></script>
    <script src="cart.js"></script>
    <script src="display.js"></script>
  </body>
</html>