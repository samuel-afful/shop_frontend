import React from 'react';
import Navbar from "../components/Navbar";
import Announcement  from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
const Home = () => {
  return (
    <div>
      <Announcement/>
        <Navbar/>
       <Slider/>
      <Categories/>
       <Products/>  
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default Home;
