import { useEffect, useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import cart from '../scripts/cart.js'
import {updateCart} from '../constants.js'
export default function Header() {

  const navigate = useNavigate()
  const [cartCount, setCartCount] = useState(cart.cartArray.reduce((total, item) => total + (item.quantity || 1), 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCartCount(cart.cartArray.reduce((total, item) => total + (item.quantity || 1), 0));
    }, 100);
    return () => clearInterval(interval);
  }, []);




  function handelNavigate(path){
    if(path === undefined || path === null ){
      navigate('/')
    }else{
    navigate(`/${path}`)
    }
  }
  
  function handelSearchValue(e){
    const value = e.target.value;
    console.log(value)
  }

  function handelSearch(e) {
    if (e.key === 'Enter') {
      const searchValue = e.target.value.trim();
      if (searchValue) {
        navigate(`/search/${searchValue}`);  // Send the normal search value as-is.
      }
    }
  }

  return (
    <header className="header" dir="rtl">
      <div onClick={() => {handelNavigate()}} className="header-section logo-section">
        {/* Logo placeholder - replace src with your actual logo */}
        <img src={logo} alt="شعار" className="logo" />
      </div>

      <div className="header-section search-section">
        <div className="search-container">
          <input type="text" placeholder="ابحث عن منتج..." 
           onChange={handelSearchValue} onKeyDown={handelSearch} className="search-input" />

        </div>
      </div>

      <div className="header-section cart-section">
        <div className="cart-container">
          <span className="cart-count">{cartCount}</span>
          <svg className="cart-icon" onClick={() => {
            handelNavigate('cart')
          }} viewBox="0 0 24 24" width="24" height="24" >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
      </div>
    </header>
  );
}