import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { postitLogin } from "../assets";
import { BsPersonCircle } from "react-icons/bs";

const Login = () => {
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const passwordValid = password === '9544238';

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <BsPersonCircle className="text-8xl text-red"/>
      <div className="input-container mb-8 mt-12">
        <input
          onChange={handleInputChange}
          value={password}
          type="password"
          name="text"
          className="input"
          placeholder="***************"
        />
      </div>

      {passwordValid ? (
        <Link to="/home">
          <div className="btn-container">
            <div className="btn-content flex justify-center items-center relative transition-all">
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
      <img src={postitLogin} alt="postit" className="absolute bottom-10 right-10" />
    </section>
  );
};

export default Login;
