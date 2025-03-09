import React from 'react'
import Login from './Login';
const Main = () => {
  return (
    <>
      <div className="mainmain">
        <div className="submain">
          <div className="heading">
            <p className='startin' >Starting At $999 </p>
            <div className='notebook' >The Best Notebook</div>
            <div className='collect' >collection 2024</div>
            <div className='offer' >
              Exclusive Offer <span>-10%</span> off this week{" "}
            </div>
            <button onClick={Login} className='buttonshop' >Shop Now</button>
          </div>
          <div className="image">
            <img src="/public/laptop.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main