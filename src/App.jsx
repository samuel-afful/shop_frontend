import Navbar from "./components/Navbar";
import Announcement  from "./components/Announcement";
import Slider from "./components/Slider"
import Categories from './components/Categories'
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <Announcement/>
       <Navbar/>
       <Slider/>
      <Categories/>
      <Products/>
    </div>
  );
}

export default App;
