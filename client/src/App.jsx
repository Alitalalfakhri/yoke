import { useState , useEffect} from "react";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import ReadMore from "./pages/ReadMore.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductCard from "./components/ProductCard.jsx";
import SearchPage from "./pages/SearchPage.jsx"





export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const HeaderElement = <Header  cartCount={cartCount}/>;
 

  



  
   
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {HeaderElement}
                <HomePage path="/" />
              </>
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <>
                {HeaderElement}
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <>
                {HeaderElement}
                <ReadMore />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                {HeaderElement}
                <CartPage />
              </>
            }
          />
          <Route
            path="/search/:searchValue"
            element={
              <>
                {HeaderElement}
                <SearchPage />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
