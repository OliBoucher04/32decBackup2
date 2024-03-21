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
      <img src={bgNotWindows} alt="fond" className="fixed -z-[50] h-screen object-fill w-screen"/>
      <div className="grid grid-cols-2">
        <section className="flex flex-col justify-center items-center h-screen ml-96">
          <div className="border-l-2 border-indigo-400 w-[0em] h-[40em] absolute top-40 right-[50%]"> </div>
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
         <img src={logoNotWindows} alt="logo NOT Windows" className="w-56 absolute right-[34rem] top-[22rem]"/>
      </div>
      <img src={postitLogin} alt="postit" className="absolute bottom-10 right-10" />
    </div>
  );
};

export default Login;
