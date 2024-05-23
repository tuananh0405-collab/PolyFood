import React from "react";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import useDocumentTitle from "../../../title/UseDocumentTitle";

const Cart = () => {
  useDocumentTitle('Cart')

  return (
    <div className="flex flex-col mb-10">
      <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
        <a className="hover:text-red-600">
          <Link to="/">TRANG CHỦ </Link>
        </a>
        / CART
      </div>
      {/* các sản phẩm trong giỏ hàng  */}
      <div className="mt-12 w-11/12 m-auto">
        <p className="text-left text-2xl mb-10">
          Các mặt hàng trong giỏ hàng của bạn.
        </p>
        <CheckoutProduct />
      </div>
      {/* tính tổng giá  */}
      <div className="flex justify-end w-11/12 m-auto">
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
