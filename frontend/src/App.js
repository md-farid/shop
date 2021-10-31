import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
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
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </Switch>
        </main>
        <footer className="row center">All right reversed</footer>
      </div>
    </Router>
  );
}

export default App;
