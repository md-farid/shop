import React from "react";
import Product from "./components/Product";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Shop
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <footer className="row center">All right reversed</footer>
    </div>
  );
}

export default App;
