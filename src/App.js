import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  
  return (
    <Router>
    <div className="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">Amazon</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
        <Link to="/signIn">Sign In</Link>
      </div>
    </header>
    <main>
      <Route path="/product/:id" component={ProductScreen}/>
      <Route path="/" component={HomeScreen} exact/>
    </main>
        <footer className="row center">All right reserved  { new Date().getFullYear()}</footer>
      </div>
      
  </Router>
  );
}

export default App;
