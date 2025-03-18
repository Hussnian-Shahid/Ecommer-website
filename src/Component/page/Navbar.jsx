import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Productdata } from "../../DataLoop";

const Navbar = ({ ordercount }) => {
  const [login, setLogin] = useState(false);
  const convertFunction = () => {
    setLogin(true);
  };
  function closeLogin() {
    setLogin(false);
  }
  const [input, setInput] = useState("");
  
  const valueUpdate = (e) => {
    setInput(e.target.value);
  };

  const [searchResult, setSearchResult] = useState([]);

  const valueFunction = () => {
     const findProduct = Productdata.filter((product) => product.title == input);
     setSearchResult(findProduct)
     console.log(findProduct);
  };
  const enterFuntion = (e) => {
    if (e.key === "Enter") {
      valueFunction();
    }
  };
  return (
    <>
      {login && <Login closeFunction={closeLogin} />}
      <div className="mainnavbar">
        <div className="subnavbar">
          <div className="webname">
            <Link to="/" className="linkd">
              <div className="webtitlename">Shopify</div>
            </Link>
          </div>
          <div className="mainsearch">
            <input
              value={input}
              onChange={valueUpdate}
              onKeyDown={enterFuntion}
              className="input1"
              type="text"
              placeholder="Search for a product..."
            />
            <img
              onClick={valueFunction}
              className="image1"
              src="/search.png"
            />
            {searchResult.length > 0 &&
              searchResult.map((item, id) => {
                return (
                  <div className="showingproduct" key={item.id}>
                    <div className="appleimage">
                      <img src={item.image} />
                    </div>
                    <div className="allproductdetail">
                      <h3 className="titleof">{item.title}</h3>
                      <div className="priceof">{item.price}</div>
                      <div className="salepriceof">{item.saleprice}</div>
                      <div className="aboutof">{item.about}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="catogorize">
            <Link to="/products" className="linkproduct">
              <div className="product">
                <b>Product</b>
              </div>
            </Link>
            <Link to="/categorise" className="linkproduct">
              <div className="catogory">
                <b>Categorise</b>
              </div>
            </Link>

            <div onClick={convertFunction} className="login">
              <span>
                <img className="image2" src="/public/user.png" alt="" />
              </span>
              <p className="loginname"> Login </p>
            </div>
            <div className="loginno3">
              <Link to="/Cart">
                <img
                  className="image3"
                  src="/public/titleTrollypng.png"
                  alt=""
                />
                <span className="orders">
                  <sup>{ordercount}</sup>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
