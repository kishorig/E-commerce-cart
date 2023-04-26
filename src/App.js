import { HashRouter, Routes, Route, Link } from "react-router-dom"; 
import ReactDOM from "react-dom/client";
import Productlist from "./components/product.js";
import Cartlist from "./components/cart.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <HashRouter>
   
      <ul id="mynav">
        <li><Link to="/product" className="mylink">Product List</Link></li>
        <li><Link to="/cart">
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open Cart</button>
            </Link></li>
      </ul>
      
      <Routes>
        <Route exact path ="/product" element={<Productlist/>} />
        <Route exact path ="/cart" element={<Cartlist/>} />      
      </Routes>
    </HashRouter>
  );
}

export default App;
