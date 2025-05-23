import React from 'react';
import '../../styles/CategoriesList.css';
import { useNavigate } from "react-router-dom";

import generator from '../../assets/generator.png';
import fiveKv from '../../assets/fiveKv.png';
import kama from '../../assets/kama.png';
import arch from '../../assets/arch.png';
import lawner from '../../assets/lawner.png';
import meshar from '../../assets/meshar.png';
import washer from '../../assets/washer.png';
import water from '../../assets/water.png';
import all from '../../assets/all.png';
import others from '../../assets/others.png';

export default function CategoriesList() {
  const navigate = useNavigate();

  function categoryClickHandler(category) {
    const encodedCategory = encodeURIComponent(category);
    navigate(`/category/${encodedCategory}`);
  }

  return (
    <>
      <h2 className='categories-list-title' dir='rtl'>تصفح الفئات</h2>
      <div className='categories-list'>

        <div className='category generator' onClick={() => categoryClickHandler('ادوات احتياطية مولدات')}>
          <img src={generator} alt="ادوات احتياطية مولدات" />
        </div>

        <div className='category fiveKv' onClick={() => categoryClickHandler('ادوات احتياطية 5 كي في')}>
          <img src={fiveKv} alt="ادوات احتياطية 5 كي في" />
        </div>

        <div className='category kama' onClick={() => categoryClickHandler('ادوات احتياطية كامة')}>
          <img src={kama} alt="ادوات احتياطية كامة" />
        </div>

        <div className='category arch' onClick={() => categoryClickHandler('ادوات احتياطية زراعي')}>
          <img src={arch} alt="ادوات احتياطية زراعي" />
        </div>

        <div className='category lawner' onClick={() => categoryClickHandler('ادوات احتياطية حاشوشة')}>
          <img src={lawner} alt="ادوات احتياطية حاشوشة" />
        </div>

        <div className='category meshar' onClick={() => categoryClickHandler('ادوات احتياطية ميشار')}>
          <img src={meshar} alt="ادوات احتياطية ميشار" />
        </div>

        <div className='category motor' onClick={() => {categoryClickHandler("ماطور غسالة")}}>
          <img src={washer} alt="ادوات احتياطية ماتور" />
        </div>
        <div className='category motor' onClick={() => {categoryClickHandler("ماطور ماء")}}>
          <img src={water} alt="ادوات احتياطية ماتور ماء" />
        </div>

        <div className='category kamla' onClick={() => categoryClickHandler('الكل')}>
          <img src={all} alt="كل الأدوات" />
        </div>

        <div className='category other' onClick={() => categoryClickHandler('أخرى')}>
          <img src={others} alt="ادوات احتياطية اخرى" />
        </div>

      </div>
    </>
  );
}
