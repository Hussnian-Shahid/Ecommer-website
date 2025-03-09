import React, { useState } from 'react'
import Navbar from "./Component/page/Navbar.jsx"
import Main from "./Component/page/Main.jsx";
import Services from "./Component/page/Services.jsx";
import ProductList from "./Component/page/ProductList.jsx";
import Footer from "./Component/page/Footer.jsx";
import { Productdata } from "./DataLoop.jsx";

const Home = () => {
  const [ordercount,setOrdercount] = useState(0)
  const addingOrder = () => {
    setOrdercount(ordercount + 1)
  }  
  return (
    <>
      <Navbar ordercount={ordercount} />
      <Main />
      <Services />
      <ProductList addingOrder={addingOrder} Productdata={Productdata} />
      <Footer />
    </>
  );
}

export default Home