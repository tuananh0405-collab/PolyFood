import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../context/StateProvider";
import { Link } from "react-router-dom";
// import { getBasketTotal } from "../reducer/reducer";

const Subtotal = () => {
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
    <div className="subtotal border rounded-lg bg-gray-100 p-5">
      <CurrencyFormat
        className="flex flex-col "
        renderText={(value) => (
          <div className="flex flex-col">
            <p className="mb-1 text-xl">
              Tổng số giỏ hàng ( {totalQuantity} sản phẩm)
            </p>
            <hr className="mb-5" />
            <p className="text-left text-red-600 text-2xl mb-10">
              Tổng cộng : <strong className="text-red-600">{value}</strong>{" "}
            </p>
            <div className="flex items-center justify-center">
              <button className="rounded-full bg-red-500 w-fit text-white p-5 hover:bg-black duration-400">
                <Link to="/payment">Tiến hành kiểm tra</Link>
              </button>
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
  );
};

export default Subtotal;
