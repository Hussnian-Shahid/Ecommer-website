import React from 'react'
const Login = ({ closeFunction }) => {
  return (
    <>
      <div className="loginmain">
        <div className="loginsub">
          <div className="closeicon">
            <img
              onClick={closeFunction}
              className="closeimage"
              src="/public/delete.png"
              alt=""
            />
          </div>
          <div className="titlelogin">
            <img className="lockimage" src="/public/lock.png" alt="" />
            Login
            <img className="lockimage" src="/public/lock.png" alt="" />
          </div>
          <div>
            <input
              className="inputoflogin"
              type="text"
              placeholder="write your username...(Hussnian-shahid)"
            />
          </div>
          <div>
            <input
              className="inputoflogin"
              type="text"
              placeholder="write your Password...(@idkwH9839hJ)"
            />
          </div>
          <button onClick={closeFunction} className="submitbutton">
            Submit
          </button>
          <div className="accout">
            No Account?{" "}
            <span onClick={closeFunction} className="register">
              Register
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login