import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CardPay({image, name}) {
  const initialMinutes = 15;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  // console.log(image);
  // console.log(name);

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

  return (
    <div className="CardPay flex items-center justify-center bg-gray-100">
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
                    Thanh toán qua Ngân hàng {name}
                    </p>
                  </div>
                </div>
                <div className=" w-[500px] pl-[20px]">
                  <div className="w-full h-[48px] border-b-2 border-blue-600 flex items-center justify-center">
                    <p>Thẻ nội địa</p>
                  </div>
                  <div className="pt-5">
                    <div className="w-full h-[36px] pb-[80px]">
                      <label htmlFor="cardnumber">Số thẻ</label>
                      <div class="flex items-center justify-center">
                        <input
                          type="text"
                          class="w-[400px] border-r-0"
                          name="cardnumber"
                          id="cardnumber"
                          placeholder="Nhập số thẻ"
                        ></input>
                        <div
                          class="w-[100px] h-[42px] flex items-center justify-center"
                          // style={{
                          //   border: "1px solid black",
                          //   borderLeft: "none",
                          // }}
                        >
                          <img
                            src={image}
                            alt=""
                            class="w-full h-full"
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[36px] pb-[80px]">
                      <label htmlFor="carduser">Tên chủ thẻ</label>
                      <div>
                        <input
                          type="text"
                          class="w-[480px]"
                          name="carduser"
                          id="carduser"
                          placeholder="Nhập tên chủ thẻ (không dấu)"
                        ></input>
                      </div>
                    </div>
                    <div className="w-full h-[36px] pb-[80px]">
                      <div className="flex items-center gap-1">
                        <label htmlFor="carddate">Ngày phát hành</label>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                      </div>
                      <div>
                        <input
                          type="text"
                          class="w-[250px]"
                          name="carddate"
                          id="carddate"
                          placeholder="MM/YY"
                        ></input>
                      </div>
                    </div>
                  </div>

                  {/*  */}

                  <div className="mb-6 h-[70px] w-full border-dashed border-gray-100 border-t-2 border-b-2 flex items-center justify-between">
                    <p>Mã khuyến mãi</p>
                    <div className="h-[40px] rounded-xl flex items-center justify-center gap-1 w-[200px] bg-gray-100 hover:cursor-pointer hover:bg-gray-300 duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                      </svg>
                      <p className="text-sm">Chọn hoặc nhập mã</p>
                    </div>
                  </div>

                  {/*  */}

                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 384 512"
                    >
                      <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
                    </svg>
                    <a href="">Điều kiện sử dụng dịch vụ</a>
                  </div>

                  {/*  */}

                  <div className="w-full flex items-center justify-between pt-8 pb-8 ">
                    <div className="rounded-xl flex items-center justify-center w-[240px] h-[44px] bg-gray-100 hover:cursor-pointer hover:bg-gray-300 duration-300">
                      <p>Hủy thanh toán</p>
                    </div>
                    <div className="rounded-xl flex items-center justify-center w-[240px] h-[44px] bg-blue-400 hover:cursor-pointer hover:bg-blue-500 duration-300">
                      <p>Tiếp tục</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  className="w-6 h-6 fill-gray-500"
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
                  className="w-6 h-6 fill-gray-500"
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

export default CardPay;
