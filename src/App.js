import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CartScreen from "./Screens/CartScreen";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  const cart  = useSelector(state => state.cart)
  const {cartItems}=cart;
  
  return (
    <Router>
    <div className="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">Amazon</Link>
      </div>
      <div>
        <Link to="/cart">Cart
        {
          cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )
        }
        </Link>
        <Link to="/signIn">Sign In</Link>
      </div>
    </header>
    <main>
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/product/:id" component={ProductScreen}/>
      <Route path="/" component={HomeScreen} exact/>
    </main>
        <footer className="row center">All right reserved  { new Date().getFullYear()}</footer>
      </div>
      
  </Router>
  );
}

export default App;
