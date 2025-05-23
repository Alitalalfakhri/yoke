import cart from '../../scripts/cart.js'
import { useState } from 'react'
import '../../styles/item.css'

export default function Item() {
  const [cartItems, setCartItems] = useState(cart.cartArray)
  const [deletingItemId, setDeletingItemId] = useState(null)

  function handelItemDelete(productId) {
    setDeletingItemId(productId);
    setTimeout(() => {
      const updatedCart = cart.removeItem(productId);
      setCartItems([...updatedCart]); // Update with fresh copy
      setDeletingItemId(null);
    }, 300);
  }

  function handelOrder() {
    const productNames = cartItems.map(item => item.productName).join('\n- ');
    const message = `مرحبًا، أود طلب المنتجات التالية:\n- ${productNames}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '9647813530010';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }

  return (
    <div className='cart-items-container'>
      {!cartItems || cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <h2>🛒 السلة فارغة</h2>
          <a className="back-home-link" href="/">العودة إلى الصفحة الرئيسية</a>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              className={`cart-item-container ${deletingItemId === item.productId ? 'fade-out' : ''}`}
              key={item.productId}
            >
              <div className='cart-item-left'>
                <img src={item.productImage} alt={item.productName} className='cart-item-img' />
              </div>
              <div className='cart-item-right'>
                <p className='cart-item-name'>{item.productName}</p>
              </div>
              <button className='item-delete' dir='rtl' onClick={() => handelItemDelete(item.productId)}>أزالة</button>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
            <button className='cart-order-button' onClick={handelOrder}>أثبت الطلب ؟</button>
          </div>
        </>
      )}
    </div>
  )
}
