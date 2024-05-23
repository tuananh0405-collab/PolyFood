import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDocumentTitle from "../../../title/UseDocumentTitle";
import axios from "axios";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegisterForm";
const LoginRegister = () => {
  const [LoginRegister, setLoginRegister] = useState(true);
  // true is login
  // false is register
  useDocumentTitle("Login");

  return (
    <div className="mb-10">
      <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
        <a className="hover:text-red-600">
          <Link to="/">TRANG CHỦ </Link>
        </a>
        / ĐĂNG NHẬP - ĐĂNG KÝ
      </div>
      {/* đăng nhập or đăng ký bar  */}
      <div className=" flex items-center justify-center mt-10 text-3xl gap-5 font-bold mb-5">
        <div
          className={`cursor-pointer ${LoginRegister ? "text-red-600" : ""}`}
          onClick={() => setLoginRegister(true)}
        >
          Đăng Nhập
        </div>
        |
        <div
          className={`cursor-pointer ${LoginRegister ? "" : "text-red-600"}`}
          onClick={() => setLoginRegister(false)}
        >
          Đăng Ký
        </div>
      </div>
      {/* display form  */}
      {LoginRegister ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default LoginRegister;
