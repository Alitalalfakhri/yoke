import fara from './images/fara.jpg'
import faraNew from './images/faraNew.jpg'
import ghatas from './images/ghatas.jpg'
import lwanerBlack from './images/lawnerBlack.jpg'
import lwanerOrange from './images/lawnerOrange.jpg'
import motorPoster from './images/motoPoster.jpg'
import motorSteel from './images/mototSteel.jpg'

export const products = [
  {
    _id: "6803e1d26eb03eed8a3ed181",
    name: "فاره غسيل يوكا",
    image: fara,
    price: 80000,
    description: "فاره غسيل يوكا \nيأتي معها صونده عشره متر \nومسدس \nملف نحاس بالكامل",
    hasSizes: false,
    sizes: [],
    category: "أخرى",
    stock: "true"
  },
  {
    _id: "6803e61a6eb03eed8a3ed19c",
    name:  'فارة غسيل يوكا شاصي جديد',
    image: faraNew,
    price: 30000,
    description: "فاره يوكا شاصي حديد \nتأتي مع صونده ١٠ متر ومسدس",
    hasSizes: false,
    sizes: [],
    category: "أخرى",
    stock: "true"
  },
 
  {
    _id: "680931996eb03eed8a3ed20a",
    name: "ماطور ماء ستيل ٣/٤",
    image: motorSteel,
    price: 35008,
    description: "ماطور ماء رقبه ستيل ٣/٤",
    hasSizes: false,
    sizes: [],
    category: "ماطور ماء",
    stock: "true"
  },
  {
    _id: "680932056eb03eed8a3ed20d",
    name: "ماطور ماء بوستر ٣/٤",
    image: motorPoster,
    price: 350000,
    description: "ماطور ماء بوستر ٣/٤",
    hasSizes: false,
    sizes: [],
    category: "ماطور ماء",
    stock: "true"
  },
  {
    _id: "680933e26eb03eed8a3ed217",
    name: "حاشوشة يوكا برتقالي",
    image: lwanerOrange,
    price: 9999999999996,
    description: "حاشوشه يوكا برتقالي",
    hasSizes: true,
    sizes: [],
    category: "ادوات احتياطية حاشوشة",
    stock: "true"
  },
  {
    _id: "680935626eb03eed8a3ed21f",
    name: "حاشوشه لون اسود",
    image: lwanerBlack,
    price: 55688555,
    description: "حاشوشة سوده",
    hasSizes: false,
    sizes: [],
    category: "ادوات احتياطية حاشوشة",
    stock: "true"
  },
 
  {
    _id: "6814cd78d09de8b21c2608bb",
    name: "غطاس ماء نهري",
    image: ghatas,
    price: 455655,
    description: "غطاس ماء نهري ١ انج \nغطاس ماء نهري ٢ انج \nغطاس نهري ٣ انج \nغطاس ماء نهري ٤ انج",
    hasSizes: true,
    sizes: ["١ انج ", "٢ انج ", "٣ انج ", "٤ انج "],
    category: "ادوات احتياطية زراعي",
    stock: "true"
  },
 
];
