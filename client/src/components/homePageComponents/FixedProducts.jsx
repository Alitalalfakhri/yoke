import { useState, useEffect } from 'react';
import { backendUrl } from '../../constants.js';
import axios from 'axios';
import ProductCard from '../ProductCard.jsx';
import '../../styles/explore.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // <-- This is required!
import {products} from '../../data/explore.js'
export default function Explore() {
 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);


  return (
    <div dir="rtl" className="explore">
      <h2 className='exploer-head-text'>استكشف ابرز المنتجات</h2>
        <>


          <div className="products-list">
            {products.map((product) => (
          <div data-aos="zoom-in" data-aos-opacity="1"  key={product._id}>

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

          </div>
          
        </>
    
    </div>
  );
}


