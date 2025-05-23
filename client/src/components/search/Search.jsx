import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backendUrl } from '../../constants.js';
import ProductCard from '../ProductCard.jsx';

export default function Search() {
  const navigate = useNavigate();  // Initialize navigate hook
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to show a spinner or message
  const [error, setError] = useState(null); // Error state to handle any API call issues
  const { searchValue } = useParams(); 
  console.log("Search for:", searchValue);

  useEffect(() => {
    // When searchValue changes, fetch the new data
    async function fetchData() {
      setLoading(true); // Set loading to true before starting the fetch
      setError(null); // Reset previous errors

      try {
        console.log("Fetching data for search term:", searchValue);
        const response = await axios.get(`${backendUrl}/search/${searchValue}`);
        setProducts(response.data);
      } catch (err) {
        console.log("Error fetching data:", err);
        setError("There was an error fetching the products.");
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    }

    if (searchValue) {
      fetchData();
    }
  }, [searchValue]); // Depend on searchValue to refetch data on change

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while waiting for the data
  }

  if (error) {
    return <div>{error}</div>; // Display error message if there's an issue with the API request
  }

  return (
    <div>
      <h1 dir='rtl'>نتائج البحث  "{searchValue}"</h1>
      <div className="products-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              hasSizes={product.hasSizes}
              sizes={product.sizes}
              stock={product.stock}
              route={product.route}
            />
          ))
        ) : (
          <div dir='rtl' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>لا توجد نتائج</p>
          </div>
        )}
      </div>

      {/* Back to Home Button Below the Products */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button 
          style={{
            backgroundColor: 'orange', 
            border: "none", 
            padding: "10px 20px", 
            borderRadius: "10px", 
            cursor: 'pointer'
          }} 
          onClick={() => navigate('/')}  // Navigate to home when clicked
        >
          العودة للصفحة الرئيسية
        </button>
      </div>
    </div>
  );
}
