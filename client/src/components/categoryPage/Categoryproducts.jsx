import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../../constants';
import ProductCard from '../ProductCard.jsx';
import '../../styles/categoryPage.css';
import WhatsApp from '../WhatsApp.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Helmet} from 'react-helmet-async'

export default function CategoryProducts() {
  const navigate = useNavigate();  // Define navigate for use in the button click

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Handle error state

  const { categoryName: encodedCategoryName } = useParams();

  // Decode and set the category name when URL parameter changes
  useEffect(() => {
    const decodedCategory = decodeURIComponent(encodedCategoryName);
    setCategoryName(decodedCategory);

    async function fetchProducts() {
      try {
        setLoading(true); // Set loading state to true before making the request
        setError(null); // Reset the error state in case of previous error
        const response = await axios.get(`${backendUrl}/category/${decodedCategory}`);
        console.log(response.data);

        if (response.data.length === 0) {
          setCategoryProducts([]); 
        } else {
          setCategoryProducts(response.data);
        }

      } catch (err) {
        setError('Failed to fetch products'); // Set error state if the API request fails
      } finally {
        setLoading(false); // Set loading state to false once the request is finished
      }
    }

    if (decodedCategory) {
      fetchProducts(); // Fetch products when the category name is set
    }
  }, [encodedCategoryName]); // Dependency to re-run the effect when the category name changes

  if (loading) {
    return (
      <div className="loading">
        <p>Loading products...</p> {/* You can replace this with a loading spinner */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p> {/* Show the error message if something goes wrong */}
      </div>
    );
  }

  return (
    
    <div>
      <Helmet>
        <title>{categoryName}</title>
        <meta name="description" content={`استكشف منتجاتنا من  ${categoryName}`} />
        <meta name="keywords" content={`${categoryName}`}/>
      </Helmet>
      <h2 className='category-title'>فئة: {categoryName}</h2>

      {/* Show message if no products were found */}
      {categoryProducts.length === 0 ? (
        <div className="no-products">
          <p style={{ textAlign: 'center' }}>لا توجد منتجات في هذه الفئة</p> {/* No products available */}
          <div dir='rtl' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
              style={{ backgroundColor: 'orange', border: "none", padding: "10px", borderRadius: "10px", cursor: 'pointer' }}
              onClick={() => navigate('/')} // Use navigate function to go back to home
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
        </div>
      ) : (
        <div className="products-list">
          {categoryProducts.map((product) => (
            <div key={product._id} data-aos="fade-up">
              <ProductCard
                _id={product._id}
                image={product.image}
                name={product.name}
                hasSizes={product.hasSizes}
                sizes={product.sizes}
                stock={product.stock}  
                route={product.route}
              />
            </div>
          ))}
          <div className="whatsapp-container">
              
            <button style={{ backgroundColor: 'orange', border: "none", padding: "10px", borderRadius: "10px", cursor: 'pointer' }} onClick={() => {navigate('/')}}>العودة للصفحة الرئيسية</button>
          </div>
        </div>
      )}

      <WhatsApp /> {/* Add the WhatsApp button */}
    </div>
  );
}
