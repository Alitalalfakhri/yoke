import Header from '../components/Header.jsx'
import Hero from '../components/homePageComponents/Hero.jsx'
import CategoriesList from '../components/homePageComponents/CategoriesList.jsx'


import WhatsApp from '../components/WhatsApp.jsx'
import Footer from '../components/Footer.jsx'
import { Helmet } from 'react-helmet-async';
import FixedProducts from '../components/homePageComponents/FixedProducts.jsx'







export default function HomePage(){
  return(
    <>
      <Helmet>
        <title>متجر يوكا الصفحة الرئيسية</title>
        <meta name="description"  content='مرحبا بكم في متجر يوكا حيث يمكنك ايجاد مختلف انواع الادوات الاحتياطية ' />
        <meta name="keywords" content='ادوات احتياطية شارع السنك غسالات ماطورات ادوات احتياطية زراعية'/>
        
      </Helmet>
      <Hero />
      <CategoriesList />
      <FixedProducts />
      
      <WhatsApp />
      <Footer />
      
    </>
  )
}