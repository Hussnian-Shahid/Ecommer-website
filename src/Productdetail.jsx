import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Productdata } from "./DataLoop.jsx";
import Navbar from "./Component/page/Navbar.jsx";
import Footer from "./Component/page/Footer.jsx";
import Login from './Component/page/Login.jsx';
import { Link } from 'react-router-dom';

const Productdetail = () => {
  const {id} = useParams()
  const productArray = Productdata.find((product) => product.id == id);
  console.log(productArray);
  
  const[logind,setLogind] = useState(false);
    const convertFunctiond = () => {
      setLogind(true)
    }
    function closeLogind() {
      setLogind(false);
    };
  return (
    <>
      {logind && <Login closeFunction={closeLogind} />}
      <Navbar />
      <div className="pdmain">
        <div className="pdsub">
          <div className="imagesection">
            <img className="importimage" src={productArray.image} alt="" />
          </div>
          <div className="productdetailsection">
            <div className="producttitle">{productArray.title}</div>
            <div className="productprice"> ${productArray.price} </div>
            <div className="productsaleprice"> ${productArray.saleprice} </div>
            <div className="productcatagory">
              <b>Category</b> <span>{productArray.category}</span>{" "}
            </div>
            <div className="aoubt">
              <b>About the Product</b>
            </div>
            <div className="productabout"> {productArray.about} </div>
            <div className="icons">
              <img
                onClick={convertFunctiond}
                className="image8"
                src="/public/cardtrolly.png"
                alt=""
              />
              <img
                onClick={convertFunctiond}
                className="imagereturn"
                src="/public/save-money.png"
                alt=""
              />
              <img
                onClick={convertFunctiond}
                className="imageheart"
                src="/public/heart.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="trendline">
        <div className="trending">Similar Product</div>
      </div>
      <div className="productlistmain">
        <div className="subproductlist">
          {Productdata.map((product, id) => (
            <div key={product.id}>
              <div className="box--1">
                <Link to={`/product/${product.id}`}>
                  <img
                    className="image11"
                    src={product.image}
                    alt={product.title}
                  />
                </Link>
                <div className="somedetail">
                  <div className="pcatagory">{product.category}</div>
                  <Link to={`/product/${product.id}`} className="tlink">
                    <div className="ptitle">{product.title}</div>
                  </Link>
                  <div className="imageprize">
                    <div className="priceorder">
                      <div className="pprice">${product.price}</div>
                      <div className="psaleprice">${product.saleprice}</div>
                    </div>
                    <div>
                      <img
                        className="image8"
                        src="/public/cardtrolly.png"
                        alt="Cart Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productdetail