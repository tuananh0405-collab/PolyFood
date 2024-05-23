import React, { useState, useEffect } from "react";
import BankAPI from "./BankAPI";
import VNPayAPI from "./VNPayAPI";
import BankListWrap from "./BankListWrap";
import { Link } from "react-router-dom";

function VNPay() {
  const initialMinutes = 15;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds]);

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  //   api
  const bankApi = BankAPI;
  const vnpayApi = VNPayAPI;

  return (
    <div className="VNPay flex items-center justify-center bg-gray-100">
      <div className="w-[920px] h-full">
        <div className="w-full h-[45px] flex items-center justify-between mt-1 mb-1">
          <Link to="/">
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
          </Link>
          <div className="flex items-center justify-between gap-1 hover:cursor-pointer">
            <img
              src="https://sandbox.vnpayment.vn/paymentv2/images/img/flags/en.svg"
              alt=""
            ></img>
            <p>Eng</p>
          </div>
        </div>

        {/* ------------- */}

        <div className="w-full h-full rounded-lg ">
          <div className="bg-white border-b-2 border-gray-100 w-full h-[74px] flex items-center justify-between">
            <img
              src="https://sandbox.vnpayment.vn/paymentv2/Images/brands/logo.svg"
              alt=""
              className=" pl-6"
            ></img>
            <div className="flex items-center justify-center gap-2 pr-5">
              <p>Giao dịch hết hạn sau</p>
              <div className="flex items-center justify-center gap-1">
                <div className="h-[32px] w-[32px] rounded bg-gray-800 text-white text-center pt-1">
                  {formattedMinutes}
                </div>
                <p>:</p>
                <div className="h-[32px] w-[32px] rounded bg-gray-800 text-white text-center pt-1">
                  {formattedSeconds}
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="w-[920px] h-full bg-white flex items-center justify-center pt-6">
            <div className="w-[880px] h-[50px] bg-orange-100 flex items-center text-center pl-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="fill-orange-500 pr-1"
              >
                <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
              <p className="text-orange-500 text-sm">
                Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được
                kết quả giao dịch trên website. Xin cảm ơn!
              </p>
            </div>
          </div>
          <div className=" w-[920px] h-full bg-white flex items-center justify-center pt-6 pb-8">
            <div className=" w-[880px] h-full flex items-center justify-center">
              <div className="w-[350px] bg-gray-100 flex items-center justify-center">
                <div className="w-[300px]">
                  <h2 className="text-2xl pt-4 pb-4">Thông tin đơn hàng</h2>
                  <hr className="w-[300px] pr-5"></hr>
                  <div className=" pt-4 pb-4">
                    <p className="text-gray-400">Số tiền thanh toán</p>
                    <p className="text-xl">Tiền VND</p>
                  </div>
                  <div className=" pt-4 pb-4">
                    <p className="text-gray-400">Giá trị đơn hàng</p>
                    <p>Tiền VND</p>
                  </div>
                  <div className=" pt-4 pb-4">
                    <p className="text-gray-400">Phí giao dịch</p>
                    <p>0 VND</p>
                  </div>
                  <div className=" pt-4 pb-4">
                    <p className="text-gray-400">Mã đơn hàng</p>
                    <p>638288319520123738</p>
                  </div>
                  <div className=" pt-4 pb-4">
                    <p className="text-gray-400">Nhà cung cấp</p>
                    <p>VNPAY - TryItNow</p>
                  </div>
                </div>
              </div>
              <div className="w-[530px]">
                <div className="w-full flex items-center justify-center text-center">
                  <div className=" w-[380px]">
                    <p className="text-2xl pb-4">
                      Quét mã qua ứng dụng Ngân hàng/ Ví điện tử
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <a>Hướng dẫn thanh toán</a>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="https://scontent.xx.fbcdn.net/v/t1.15752-9/371371991_1346257779336693_2404749464924962650_n.png?stp=dst-png_s206x206&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=x-jh5flIy8gAX_DUfWB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR3MW1qNH6MgQUtdaw-m1XqaRcVOqfH8OLDws0YClzQyQ&oe=6513D69A"
                      alt=""
                      className="w-[200px] h-[220px] pt-5"
                    ></img>
                  </div>
                  <div className="flex items-center justify-center pt-8 pb-8 ">
                    <div className="rounded-xl flex items-center justify-center w-[224px] h-[44px] bg-gray-100 hover:cursor-pointer hover:bg-gray-300 duration-300">
                      <Link to="/payment"><p>Hủy thanh toán</p></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="border-dashed border-t-2 border-gray-100 w-[920px] h-full bg-white flex items-center justify-center pt-6">
            <div className="w-[880px] h-full">
              <p className="pb-2">
                Danh sách Ngân hàng/ Ví điện tử có áp dụng khuyến mãi
              </p>
              <BankListWrap list={bankApi} />
            </div>
          </div>

          {/*  */}

          <div className="w-[920px] h-full bg-white flex items-center justify-center pt-8 pb-6">
            <div className="w-[880px] h-full">
              <div className="flex items-center text-center">
                <p className="pb-2">
                  Danh sách Ngân hàng/ Ví điện tử khác hỗ trợ thanh toán
                </p>
                <img
                  src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR.png"
                  alt=""
                  className="h-[14px] w-[80px] pl-1"
                ></img>
              </div>

              <BankListWrap list={vnpayApi} />
            </div>
          </div>

          {/*  */}
          <div className="border-t-2 border-gray-100 w-full h-[80px] flex items-center justify-around bg-white">
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

export default VNPay;
