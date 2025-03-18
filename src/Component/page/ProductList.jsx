import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Baner from "./Baner";

const ProductList = ({ Productdata,addingOrder }) => {

  const [productitem, setProductitem] = useState([]);

  function addingOrder2(product){
    setProductitem([...productitem, product]);
  }

  useEffect(() => {
    const convetData = JSON.stringify(productitem);
    localStorage.setItem("Hussnain", convetData);
  }, [productitem]);
  return (
    <>
      <div className="trendline">
        <div className="trending">Trending Product</div>
      </div>
      <div className="productlistmain">
        <div className="subproductlist">
          {Productdata.map((product, index) => (
            <Fragment key={product.id}>
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
                  <Link
                    to={`/product/${product.id}`}
                    className="productlink-1-1"
                  >
                    <div className="ptitle">{product.title}</div>
                  </Link>
                  <div className="imageprize">
                    <div className="priceorder">
                      <div className="pprice">${product.price}</div>
                      <div className="psaleprice">${product.saleprice}</div>
                    </div>
                    <div className="imageadding">
                      <img
                        className="image8"
                        src="/cardtrolly.png"
                        onClick={() => {addingOrder2(product), addingOrder}}
                        alt="Cart Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {index === 7 && <Baner />}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
