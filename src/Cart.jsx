import React, { useEffect, useState } from "react";
import Navbar from "./Component/page/Navbar";
import Footer from "./Component/page/Footer";
const Cart = () => {
  const [newdata, setNewdata] = useState([]);
  useEffect(() => {
    const getData = localStorage.getItem("Hussnain");
    const convetData = JSON.parse(getData);
    setNewdata(convetData);
  }, []);
  const [count, setCount] = useState(1);

const addFunction = (id) => {
  setNewdata((prevData) =>
    prevData.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const subtractFunction = (id) => {
  setNewdata((prevData) =>
    prevData.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

useEffect(() => {
  let totalprice = newdata.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  setTotal(totalprice);
}, [newdata]);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(newdata);
    let some = newdata;
    let totalprice = 0;
    some.forEach((element) => {
      totalprice += element.price;
    });
    console.log(totalprice);
    setTotal(totalprice);
  }, [newdata]);
  return (
    <div>
      <Navbar />
      <div className="trendline">
        <div className="carsection">Cart</div>
      </div>
      <div className="maincart">
        <div className="subcart">
          <div>
            <div className="table-head">
              <div className="imagesectionorder1-1">Image</div>
              <div className="imagesectionorder1-1"> Product</div>
              <div className="imagesectionorder1-1">Price</div>
              <div className="imagesectionorder1-1">Quantity</div>
              <div className="imagesectionorder1-1">Subtotal</div>
              <div className="imagesectionorderd-1-1"></div>
            </div>
            <div>
              {newdata.map((product, id) => {
                return (
                  <div className="showingproductorder" key={product.id}>
                    <div className="imagesectionorder">
                      <img className="imageorder" src={product.image} alt="" />
                    </div>
                    <div className="imagesectionordertt">
                      <div className="ordertitle">{product.title}</div>
                    </div>
                    <div className="imagesectionorder">
                      <div className="orderprice">
                        <b>$ {product.price}</b>
                      </div>
                    </div>
                    <div className="imagesectionorder1010">
                      <p onClick={() => subtractFunction(product.id)}>-</p>
                      <div>{product.quantity}</div>
                      <p onClick={() => addFunction(product.id)}>+</p>
                    </div>
                    <div className="imagesectionorder">
                      <div>
                          <b>$ {(product.price * product.quantity).toFixed(2)} </b>
                      </div>
                    </div>
                    <div className="imagesectionorderd">
                      <button className="buttondlwe"> ❌ Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="couponmain">
                <input
                  className="couponinput"
                  placeholder="Coupon code"
                  type="text"
                />
                <button className="couponbutton">Apply coupon</button>
              </div>
            </div>
          </div>
          <div>
            <div className="maincart--">
              <div className="carttotal">Cart Totals</div>
              <div className="subtotalcart">
                <div className="writetotal">Sub Total</div>
                <div>
                  <b>{total}</b>
                </div>
              </div>
              <div className="shippingclass">
                <div className="shipping">shipping</div>
                <div className="tcsdilivery">
                  <b>TCS:$5</b>
                </div>
              </div>
              <div className="addressandinput">
                <div className="address">Address</div>
                <div>
                  <textarea
                    className="inputaddress"
                    placeholder="Enter the address"
                  ></textarea>
                </div>
              </div>
              <div className="totalprise">
                <div className="uppertotal">TOTAL</div>
                <div className="boldtotal ">
                  <b>{(total + 5).toFixed(2)}</b>
                </div>
              </div>
              <button className="checkout">Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
