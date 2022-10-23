import React from 'react';
import Navbar from "../components/Navbar";
import Announcement  from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
const Product = () => {
  return (
    <div>
       <Announcement/>
       <Navbar/>
       <ProductDetail/>
       <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default Product;
