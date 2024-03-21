import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { postitLogin, bgNotWindows, logoNotWindows } from "../assets";
import { BsPersonCircle } from "react-icons/bs"; 

const Login = () => {
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const passwordValid = password === '9544238';

  return (
    <div className="relative">
      <section className="flex flex-col justify-center items-center h-screen">
        <img src={bgNotWindows} alt="fond" className="fixed -z-[50] h-screen object-fill w-screen"/>
        <BsPersonCircle className="text-8xl text-blue-900"/>
        <div className="input-container mb-8 mt-12">
          <input
            onChange={handleInputChange}
            value={password}
            type="password"
            name="text"
            className="input border-blue-900"
            placeholder="***************"
          />
        </div>
        {passwordValid ? (
          <Link to="/home">
            <div className="btn-container ">
              <div className="btn-content flex justify-center items-center relative transition-all ">
                <AiFillUnlock className="h-[30px]" />
              </div>
            </div>
          </Link>
        ) : (
          <div className="btn-container-disabled">
            <a className="btn-content" href="#">
              <AiFillLock className="h-[30px]" />
            </a>
          </div>
        )}
      </section>
      {/* <div className="border-l-4 border-blue-300 w-[46em] h-[40em] absolute right-0 top-40"> </div> */}
       <img src={logoNotWindows} alt="logo NOT Windows" className="w-56 absolute right-96 top-64"/>
      <img src={postitLogin} alt="postit" className="absolute bottom-10 right-10" />
    </div>
  );
};

export default Login;
