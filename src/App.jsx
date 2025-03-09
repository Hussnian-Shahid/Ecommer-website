import Home from './Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Productdetail from './Productdetail';
import Categorise from "./Categorise";
import Allitems from "./Allitems";
import Sectionproduct from './Sectionproduct.jsx';
import Cart from "./Cart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Productdetail />} />
        <Route path="/products" element={<Allitems />} />
        <Route path="/categorise" element={<Categorise />} />
        <Route path="/categorise/beauty" element={<Sectionproduct />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App