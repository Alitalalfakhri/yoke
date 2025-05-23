import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/productCard.css';
import cart from '../scripts/cart.js';
import { updateCart } from '../constants.js';

const Dialog = ({ isOpen, onClose, onConfirm, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <p dir="rtl">هل أنت متأكد من إضافة {productName} إلى السلة؟</p>
        <div className="dialog-buttons">
          <button onClick={onConfirm}>إضافة إلى السلة</button>
          <button onClick={onClose}>إلغاء</button>
        </div>
      </div>
    </div>
  );
};


const ProductCard = ({ image, name, hasSizes, sizes, _id , stock }) => {
  console.log(stock)
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  function handleReadMore(_id) {
    const encodedId = encodeURIComponent(_id);
    navigate(`/product/${encodedId}`);
  }

  function handleAddToCart(_id, name, image) {
    cart.addItem(_id, name, image);
    updateCart();
    console.log(cart.cartArray);
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} loading='lazy'/>
      </div>
      <div className="product-name">
        <h3>{name}</h3>
      </div>
      {hasSizes && sizes && sizes.length > 0 && (
        <ul className="product-sizes">
          {sizes.map((size, index) => (
            <li key={index}>{size}</li>
          ))}
        </ul>
      )}
      <div className="product-buttons">
        {stock ==="false" ? <p dir="rtl">غير متوفر حاليا</p> :  
          <button className="buy-button" onClick={() => setShowDialog(true)}>
            شراء
          </button>
        }
       
        <button onClick={() => handleReadMore(_id)} className="read-more-button">
          قراءة المزيد
        </button>
        <Dialog
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onConfirm={() => {
            handleAddToCart(_id, name, image);
            setShowDialog(false);
          }}
          productName={name}
        />
      </div>
    </div>
  );
};

export default ProductCard;