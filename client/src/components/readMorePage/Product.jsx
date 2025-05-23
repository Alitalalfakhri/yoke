import { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../constants.js';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import '../../styles/productDetails.css';
import Dialog from '../Dialog';
import cart from '../../scripts/cart.js';
import {Helmet} from 'react-helmet-async'
export default function Product() {
  const navigate = useNavigate()
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${backendUrl}/product/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [productId]);

  if (loading) return <p className="details-loading">...جار التحميل</p>;
  if (!product) return <p className="details-error">لم يتم العثور على المنتج</p>;

  const { image, description, hasSizes, sizes, stock, name } = product;

  const handleAddToCart = () => {
    setShowDialog(true);
  };

  const handleConfirmAdd = () => {
    cart.addItem(productId, name, image);
    setShowDialog(false);
  };

  const handleWhatsAppOrder = () => {
    const message = `مرحباً، أود طلب المنتج التالي:\n${name}\nرابط المنتج: ${window.location.href}`;
    const phone = '+96407813530010'; // Replace this
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="details-product">
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {/* Image */}
      <div className="details-image">
        <img src={image || '/path/to/fallback-image.jpg'} alt="Product" />
      </div>

      {/* Description */}
      <div className="details-description">
        <h2 dir="rtl">الوصف</h2>
        <p dir="rtl">{description}</p>
      </div>

      {/* Sizes */}
      {hasSizes && (
        <div className="details-sizes" dir="rtl">
          <h3>المقاسات المتوفرة:</h3>
          <ul>
            {sizes?.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Stock Warning */}
      {stock === 'false' && (
        <div className="details-stock">
          <span className="details-stock-warning">غير متوفر</span>
        </div>
      )}

      {/* Buttons (only show if in stock) */}
      {stock !== 'false' && (
        <div className="details-buttons" dir="rtl">
          <button className="details-button add-to-cart" onClick={handleAddToCart}>
            أضف إلى السلة
          </button>
          <button className="details-button whatsapp-order" onClick={handleWhatsAppOrder}>
            اطلب عبر واتساب
          </button>
          <button style={{ backgroundColor: 'orange', border: "none", padding: "10px", borderRadius: "10px", cursor: 'pointer' , color:'white'}} onClick={() => {navigate('/')}}>
           العودة للصفحة الرئيسية
          </button>
        </div>
      )}

      {/* Dialog */}
      <Dialog 
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={handleConfirmAdd}
        productName={name}
      />
    </div>
  );
}
