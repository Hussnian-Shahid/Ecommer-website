import React from 'react'
import Navbar from './Component/page/Navbar';
import Footer from './Component/page/Footer';
import { Link } from 'react-router-dom';
const Categorise = () => {
    const categoryLoop = [
      {
        id:1,
        Beauty: "Beauty",
        product:"View Products"
      },
      {
        id:2,
        Beauty: "Fragrance",
        product:"View Products"
      },
      {
        id:3,
        Beauty: "Furniture",
        product:"View Products"
      },
      {
        id:4,
        Beauty: "Grocries",
        product:"View Products"
      },
      {
        id:5,
        Beauty: "decoration",
        product:"View Products"
      },
      {
        id:6,
        Beauty: "kitchen",
        product:"View Products"
      },
      {
        id:7,
        Beauty: "Laptop",
        product:"View Products"
      },
      {
        id:8,
        Beauty: "Mens Shoes",
        product:"View Products"
      },
      {
        id:9,
        Beauty: "Mens Shirt",
        product:"View Products"
      },
      {
        id:10,
        Beauty: "Mens watch",
        product:"View Products"
      },
      {
        id:11,
        Beauty: "Mens pantes",
        product:"View Products"
      },
      {
        id:12,
        Beauty: "Sports",
        product:"View Products"
      },
      {
        id:13,
        Beauty: "FootBall",
        product:"View Products"
      },
      {
        id:14,
        Beauty: "Bat",
        product:"View Products"
      },
      {
        id:15,
        Beauty: "Ball",
        product:"View Products"
      },
      {
        id:16,
        Beauty: "Wicket",
        product:"View Products"
      },
      {
        id:17,
        Beauty: "Clothes",
        product:"View Products"
      },
      {
        id:18,
        Beauty: "Women cloth",
        product:"View Products"
      },
      {
        id:19,
        Beauty: "Men clothes",
        product:"View Products"
      },
      {
        id:20,
        Beauty: "Tops",
        product:"View Products"
      },
    ];
  return (
    <>
      <Navbar />
      <div className="trendline">
        <div className="trending">Categorise</div>
      </div>
      <div className="catmain">
        <div className="catsub">
          <div className="section--2">
            {categoryLoop.map((box, id) => {
              return (
                <div key={box.id}>
                  <div className="box---1">
                    <p className="beautycat">{box.Beauty}</p>
                    <Link to="/categorise/beauty">
                      <p className="productcat">{box.product}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='space'></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Categorise