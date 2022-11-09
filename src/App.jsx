import styled from "styled-components"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductListing from "./pages/ProductListing";
import Product from "./pages/Product";
import News from "./pages/News"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const Container = styled.div`
  width:100vw;
` 

function App() {
  const user = true;
  return (
   <Router>
           <Routes>
              <Route path='/' element={<Home/> }/> 
              <Route path='/news' element={<News/> }/>
              <Route path='/products' element={<ProductListing/> }/> 
              <Route path='/product/:id' element={<Product/> }/> 
              <Route path='/cart' element={<Cart/> }/> 
              <Route path='/register' element={<Register/> }/> 
              {user?<Route path='/' element={<Home/> }/>:<Route path='/login'  element={<Login/> }/>} 
            </Routes> 
   </Router>
   

  );
}

export default App;
