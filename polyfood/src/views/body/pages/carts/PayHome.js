import React, { useState } from "react";
import { Link } from "react-router-dom";
import DomesticWrap from "./DomesticWrap";
import DomesticCard from "./DomesticCard";
import InternationalCard from "./InternationalCard";

function PayHome() {
  const domesticCard = DomesticCard;
  // console.log(domesticCard);
  const internationalCard = InternationalCard;
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const handleDivClick1 = () => {
    setShowDetails1(!showDetails1);
  };
  const handleDivClick2 = () => {
    setShowDetails2(!showDetails2);
  };
  const [searchTerm1, setSearchTerm1] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const handleSearchChange1 = (event) => {
    setSearchTerm1(event.target.value.toLowerCase());
  };
  const handleSearchChange2 = (event) => {
    setSearchTerm2(event.target.value.toLowerCase());
  };
  
  const filteredDomesticBanks = domesticCard.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm1)
  )

  const filteredInternationalBanks = internationalCard.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm2)
  )
  return (
    <div className="PayHome flex items-center justify-center bg-gray-100">
      <div className="w-[650px] h-full">
        <div className="w-full h-[45px] flex items-center justify-between mt-1 mb-1">
          <div className="w-[110px] h-[45px] flex items-center justify-between pl-3 rounded-lg hover:bg-gray-400 hover:cursor-pointer duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <p className="pr-4">Quay lại</p>
          </div>
          <div className="flex items-center justify-between gap-1 hover:cursor-pointer">
            <img
              src="https://sandbox.vnpayment.vn/paymentv2/images/img/flags/en.svg"
              alt=""
            ></img>
            <p>Eng</p>
          </div>
        </div>

        {/* ------------- */}

        <div className="w-full h-full rounded-lg border">
          <div className="bg-white w-full h-[74px]">
            <img
              src="https://sandbox.vnpayment.vn/paymentv2/Images/brands/logo.svg"
              alt=""
              className="pt-[21px] pl-6"
            ></img>
          </div>

          {/*  */}
          <div className="w-[620px] pl-[26px] pb-6">
            <div className="w-full h-[80px] flex items-center justify-center">
              <h3 className="text-center text-2xl">
                Chọn phương thức thanh toán
              </h3>
            </div>
            {/* ---------------- Phuong thuc 1 ------------------ */}
            <Link to="/vnpay">
              <div className="w-full h-[80px] flex items-center justify-between bg-white mb-2 hover:cursor-pointer hover:shadow-lg hover:shadow-left hover:shadow-bottom hover:shadow-right">
                <div className="flex items-center justify-between pl-6">
                  <h4 className="text-center">Ứng dụng thanh toán hỗ trợ </h4>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR.png"
                    alt=""
                    className="h-[18px] w-[100px] pl-1"
                  ></img>
                </div>
                <img
                  src="https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-vnpay-qr.svg"
                  alt=""
                  className="w-[70px] h-[70px] pr-4"
                ></img>
              </div>
            </Link>

            {/* ---------------- Phuong thuc 2 ------------------ */}
            <div
              className={`w-full h-[80px] flex items-center justify-between bg-white hover:cursor-pointer ${
                showDetails1
                  ? "shadow-lg shadow-left shadow-bottom shadow-right"
                  : ""
              }`}
              onClick={handleDivClick1}
            >
              <h4 className="text-center pl-6">
                Thẻ nội địa và tài khoản ngân hàng
              </h4>
              <img
                src="https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-atm.svg"
                alt=""
                className="w-[70px] h-[70px] pr-4"
              ></img>
            </div>
            {showDetails1 && (
              <div className="w-full pt-8 pb-4 border-dashed border-t-2 border-gray-100 bg-white">
                <div className="flex items-center justify-center">
                  <form className="w-[600px] px-4 pb-2">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        onChange={handleSearchChange1}
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-center pl-4 pt-2">
                  <DomesticWrap list={filteredDomesticBanks} />
                </div>
              </div>
            )}

            {/* ---------------- Phuong thuc 3 ------------------ */}
            <div className={`mt-2 w-full h-[80px] flex items-center justify-between bg-white hover:cursor-pointer ${
                showDetails2
                  ? "shadow-lg shadow-left shadow-bottom shadow-right"
                  : ""
              }`}
              onClick={handleDivClick2}>
              <h4 className="text-center pl-6">Thẻ thanh toán quốc tế</h4>
              <img
                src="https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-credit.svg"
                alt=""
                className="w-[70px] h-[70px] pr-4"
              ></img>
            </div>
            {showDetails2 && (
              <div className="w-full pt-8 pb-4 border-dashed border-t-2 border-gray-100 bg-white">
                <div className="flex items-center justify-center">
                  <form className="w-[600px] px-4 pb-2">
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        onChange={handleSearchChange2}
                      />
                    </div>
                  </form>
                </div>
                <div className="flex items-center justify-center pl-4 pt-2">
                  <DomesticWrap list={filteredInternationalBanks} />
                </div>
              </div>
            )}

            {/* ---------------- Phuong thuc 4 ------------------ */}
            <Link to="/vnpay">
              <div className="mt-2 w-full h-[80px] flex items-center justify-between bg-white mb-2 hover:cursor-pointer hover:shadow-lg hover:shadow-left hover:shadow-bottom hover:shadow-right">
                <div className="flex items-center justify-between pl-6">
                  <h4 className="text-center">Ví điện tử </h4>
                  <img
                    src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR.png"
                    alt=""
                    className="h-[18px] w-[100px] pl-1"
                  ></img>
                </div>
                <img
                  src="https://sandbox.vnpayment.vn/paymentv2/images/icons/mics/64x64-vi-vnpay.svg"
                  alt=""
                  className="w-[70px] h-[70px] pr-4"
                ></img>
              </div>
            </Link>
          </div>

          {/*  */}
          <div className="w-full h-[80px] flex items-center justify-around bg-white">
            <div className="flex items-center justify-center">
              <div className="border rounded-lg h-[40px] w-[40px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 fill-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <a className="pl-1">1900.5555.77</a>
            </div>
            <div className="flex items-center justify-center">
              <div className="border rounded-lg h-[40px] w-[40px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 fill-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <a className="pl-1">hotrovnpay@vnpay.com</a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img
                src="https://sandbox.vnpayment.vn/paymentv2/images/img/logos/global-sign.svg"
                alt=""
                className="h-[32px]"
              ></img>
              <img
                src="https://sandbox.vnpayment.vn/paymentv2/images/img/logos/pcidss.svg"
                alt=""
                className="h-[32px]"
              ></img>
            </div>
          </div>

          {/*  */}
          <div className="w-full flex items-center justify-around text-sm pt-4 pb-6">
            <p>Phát triển bởi VNPAY © 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayHome;
