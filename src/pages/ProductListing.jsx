import React from 'react';
import Navbar from "../components/Navbar";
import Announcement  from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
const ProductListing = () => {
  return (
    <div>
       <Announcement/>
       <Navbar/>
       <Filter/>
       <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default ProductListing;
