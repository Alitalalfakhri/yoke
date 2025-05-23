import React, { useState, useEffect } from 'react';
import AOS from 'aos'
import heroFirstImage from '../../assets/hero-first-small.png'
import '../../styles/Hero.css';
import  'aos/dist/aos.css'; // <-- This is required!

const Hero = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // ensures it picks up new elements
  }, []);
  
  const scrollToSection = () => {
    const element = document.querySelector(".explore");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function contactUs(){
    window.location.href = 'https://wa.me/+96407813530010'
  }
  return (
    <div className='hero' >


      <img 
        src={heroFirstImage} 
        alt="صورة من متجر يوكا" 
        className='hero-img'
        loading="lazy" 
       
      />
    <div className='hero-buttons'>
      <button className='hero-call-button' onClick={contactUs}>اتصل بنا</button>
      <button className='hero-browse-button' onClick={scrollToSection}>تصفح المنتجات</button>
    
    </div>
       
    </div>
  );
};

export default Hero;