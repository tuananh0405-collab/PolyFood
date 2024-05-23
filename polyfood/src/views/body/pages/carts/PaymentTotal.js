import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../context/StateProvider";
import { Link } from "react-router-dom";
// import { getBasketTotal } from "../reducer/reducer";

const PaymentTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let updatedTotalQuantity = 0;
    let updatedTotalPrice = 0;

    // Calculate the total quantity and total price based on the basket
    basket.forEach((product) => {
      updatedTotalQuantity += product.quantity;
      updatedTotalPrice += product.quantity * product.price;
    });

    setTotalQuantity(updatedTotalQuantity);
    setTotalPrice(updatedTotalPrice);
  }, [basket]);
  return (
    <>
      <div className="subtotal border rounded-lg bg-gray-100 p-5">
        <CurrencyFormat
          className="flex flex-col "
          renderText={(value) => (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="mb-1 text-xl">Tổng số giỏ hàng</p>
                <p>{totalQuantity} sản phẩm</p>
              </div>
              <hr className="mb-5" />
              <div className="flex justify-between">
                <p className="text-left  text-lg mb-10">Chi phí vận chuyển:</p>
                <p className="text-orange-400">đang tính</p>
              </div>
              <hr className="mb-5" />
              <div className="flex justify-between">
                <p className="text-left  text-2xl mb-10">Tổng cộng : </p>
                <p>
                  <strong className="text-orange-400">{value}</strong>
                </p>
              </div>
              <hr className="mb-5" />
              <div className="text-left">
                <strong>Thời gian giao hàng dự kiến</strong>: Vui lòng nhập vào
                địa chỉ.
              </div>
              <div className="text-left text-orange-400">
                Chi phí cuối cùng đã là chi phí đã được tính cùng với phí vận
                chuyển
              </div>
            </div>
          )}
          decimalScale={2}
          value={totalPrice}
          suffix={" vnd"}
          displayType={"text"}
          thousandSeparator={true}
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-5 mt-5 mb-5">
        <button className="rounded-full bg-orange-400 w-full text-white p-2 hover:bg-black duration-500">
          <Link to="/payment">Thanh toán khi nhận hàng</Link>
        </button>
        <Link
          to="/payhome"
          className="rounded-full bg-orange-400 w-full text-white p-2 hover:bg-black duration-500"
        >
          <button>Thanh toán online</button>
        </Link>
      </div>
      <div className="mb-10 border rounded-lg bg-gray-100 p-5 leading-9 flex flex-col gap-5">
        <div className="flex items-center ">
          <div className=" w-1/3 text-lg">Mã giảm giá</div>
          <div class="border-t border-gray-200 border-3 mr-3 w-2/3"></div>
        </div>
        <div className="text-left pl-11">
          Nhập mã giảm giá của bạn (nếu có).
        </div>
        <div className="text-left pl-11 w-full h-[50px]">
          <input className="w-full h-full" />
        </div>
        <div className="text-left pl-11">
          <button className="rounded-full bg-orange-400 w-fit text-white p-2 pr-5 pl-5 hover:bg-black duration-500">
            Áp dụng
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentTotal;
