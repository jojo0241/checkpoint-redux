import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from "react-router-dom";
import Category from './Category';
import Home from './Home';
import Products from './Products';
import ProductItem from './ProductItem';
import Error from './Error';
import Modify from './Modify';

function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/*  Les composants de lien sont utilisés pour établir des liens avec d'autres vues */}
            <li>
              {" "}
              <Link to="/">Add product</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        {/*  Les composants de la route sont rendus si la propriété du chemin correspond à l'URL actuelle.  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductItem />} />
          
          <Route path="/Modify" element={<Modify />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
