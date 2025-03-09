import React from "react";
import Navbar from "./Component/page/Navbar";
import { Productdata } from "./DataLoop";
import Footer from "./Component/page/Footer";

const Sectionproduct = () => {
  return (
    <div>
      <Navbar />
      <div className="trendline">
        <div className="trending">Categorized  View Product</div>
      </div>
      <div className="productlistmain">
        <div className="subproductlist">
          {Productdata.map((product) => (
            <div key={product.id} className="box--1">
              <img
                className="image11"
                src={product.image}
                alt={product.title}
              />
              <div className="somedetail">
                <div className="pcatagory">{product.catagory}</div>
                <div className="ptitle">{product.title}</div>
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sectionproduct;
