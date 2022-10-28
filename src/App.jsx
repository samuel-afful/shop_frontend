import styled from "styled-components"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductListing from "./pages/ProductListing";
import Product from "./pages/Product";
const Container = styled.div`
  width:100vw;
`

function App() {
  return (
    <div className="App">
    <Cart/>
    </div>
  );
}

export default App;
