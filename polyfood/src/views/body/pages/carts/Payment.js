import React from "react";
import { Link } from "react-router-dom";
import Address from "./Address";
import CustomeInfo from "./CustomeInfo";
import Subtotal from "./Subtotal";
import PaymentTotal from "./PaymentTotal";

const Payment = () => {
  return (
    <>
    <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
        <a className="hover:text-red-600">
          <Link to="/">TRANG CHỦ </Link>
        </a>
        /   THANH TOÁN
      </div>
    <div className="flex mt-10 pl-5 pr-5">
      {/* infor */}
      <div className="w-1/2">
        <h2 className="text-left font-bold text-2xl mb-10">Thông tin khách hàng</h2>
        <div className="pr-[30px]"><CustomeInfo/></div>
        {/* <Address/> */}
      </div>
      {/* bill */}
      <div className="w-1/2">
        <h2 className="text-left font-bold text-2xl mb-10">ĐƠN HÀNG</h2>
        <PaymentTotal/>
      </div>
    </div>
    </>
  );
};

export default Payment;
