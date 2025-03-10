import Navbar from './Component/page/Navbar';
import Footer from './Component/page/Footer';
import { Productdata } from './DataLoop'
import { Link } from 'react-router-dom';
const Allitems = ({addingOrder}) => {
  return (
    <>
      <Navbar />
      <div className="trendline">
        <div className="trending">New Arrivals</div>
      </div>
      <div className="productlistmain">
        <div className="subproductlist">
          {Productdata.map((product, index) => (
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
                  <div className="pcatagory">{product.catagory}</div>
                  <Link to={`/product/${product.id}`}>
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
                        onClick={addingOrder}
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
};

export default Allitems