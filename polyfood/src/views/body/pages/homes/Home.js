import React from "react";
import { Carousel, Button } from "antd";
import "./Home.css";
import { Col, Row, Statistic } from "antd";
import useDocumentTitle from "../../../title/UseDocumentTitle";
import ProductCarousel from "./ProductCarousel";
function Home() {
  
  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const contentStyle1 = {
    height: "600px",
    color: "#gray",
    lineHeight: "160px",
    textAlign: "center",
    background: "lightgray",
  };

  const { Countdown } = Statistic;
  const deadlineDate = new Date(2023, 7, 17); 
  const deadline = deadlineDate.getTime() + 1000 * 60 * 60 * 24 * 80 + 1000 * 30; // Dayjs is also OK

  const onFinish = () => {
    console.log("finished!");
  };
  const onChange = (val) => {
    if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
  };

  useDocumentTitle('Organic Food Home')
  return (
    <>
      {/* Carousel */}
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle} className="ml-5 mr-5">
              <div class="relative">
                <img
                  className="h-full w-full"
                  src="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg"
                />
                <div class="absolute  text-white top-1/4 right-5 w-2/5 text-3xl flex flex-col gap-10 text-left">
                  <div className="flex items-center line1">
                    <div class="border-t border-green-600 border-4 mr-3 w-1/4"></div>

                    <div className=" w-3/4 ">Tự nhiên & Khoẻ mạnh</div>
                  </div>
                  <div className=" line2">THỰC PHẨM THUẦN CHAY</div>
                  <div className="line3">
                    <div className=" bg-green-500 w-fit p-2 btn">
                      Mua hàng ngay
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle} className="ml-5 mr-5">
              <div class="relative">
                <img
                  className="h-full w-full"
                  src="https://images.pexels.com/photos/5677794/pexels-photo-5677794.jpeg"
                />
                <div class="absolute  text-white top-1/4 right-5 w-2/5 text-3xl flex flex-col gap-10 text-left">
                  <div className="flex items-center line1">
                    <div class="border-t border-green-600 border-4 mr-3 w-1/4"></div>

                    <div className=" w-3/4 ">Tự nhiên & Khoẻ mạnh</div>
                  </div>
                  <div className=" line2">THỰC PHẨM THUẦN CHAY</div>
                  <div className="line3">
                    <div className=" bg-green-500 w-fit p-2 btn">
                      Mua hàng ngay
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
      {/* Support */}
      <div className="sp gap-5 pl-5 w-full pr-5 pr-5 mt-10 mb-10 content-start">
        <div className="sp-item item1 h-[120px]">
          <img
            className="img-text"
            src="https://polyfood.store/assets/img/icon-img/support-8.png"
          />
          <p>MIỄN PHÍ VẬN CHUYỂN CHO TẤT CẢ CÁC ĐƠN HÀNG</p>
        </div>
        <div className="sp-item item2 h-[110px]">
          <img
            className="img-text"
            src="https://polyfood.store/assets/img/icon-img/support-9.png"
          />
          <p>ĐẢM BẢO HOÀN TIỀN TRONG VÒNG 5 NGÀY</p>
        </div>
        <div className="sp-item item3 h-[100px]">
          <img
            className="img-text"
            src="https://polyfood.store/assets/img/icon-img/support-10.png"
          />
          <p>TRÊN MỖI ĐƠN HÀNG TRÊN 500K</p>
        </div>
      </div>
      {/* Product */}
      {/* <div>
        <h1 className="font-bold text-2xl mb-10">SẢN PHẨM TIÊU BIỂU</h1>
        <div className="flex gap-3 pl-5 pr-5 overflow-hidden ">
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://polyfood.store/assets/img/product/product3.webp"
              class="max-w-xs transition duration-300 ease-in-out hover:scale-110 h-full"
            />
          </div>
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://polyfood.store/assets/img/product/product4.webp"
              class="max-w-xs transition duration-300 ease-in-out hover:scale-110 h-full"
            />
          </div>
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://polyfood.store/assets/img/product/product5.webp"
              class="max-w-xs transition duration-300 ease-in-out hover:scale-110 h-full"
            />
          </div>
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://polyfood.store/assets/img/product/product6.webp"
              class="max-w-xs transition duration-300 ease-in-out hover:scale-110 h-full"
            />
          </div>
        </div>
      </div> */}
      <div className="pt-[40px]">
        <h1 className="font-bold text-2xl mb-10">SẢN PHẨM TIÊU BIỂU</h1>
        <ProductCarousel />
      </div>
      {/* Daily trade */}
      <div className="flex pl-5 pr-5 mt-10 mb-10">
        <div className="w-3/5 flex-col items-center">
          <div className="font-semibold text-[50px] mb-10">
            Giao dịch trong ngày
          </div>

          <div className="flex justify-around mb-10 text-6xl">
            <Countdown
              title=""
              value={deadline}
              format="D H m s"
              className="countdown "
            ></Countdown>
          </div>

          <div className="flex justify-evenly mb-10 text-[25px]">
            <div>DAYS</div>
            <div>HOURS</div>
            <div>MINUTES</div>
            <div>SECS</div>
          </div>
          <div className="border btn m-auto w-1/2">Mua hàng ngay</div>
        </div>
        <div className="w-2/5 items-center">
          <img
            className="h-4/5 block ml-auto mr-auto "
            src="https://images.pexels.com/photos/552598/pexels-photo-552598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
      {/* Carousel */}
      <div className="">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle1} className="ml-5 mr-5 flex-col ">
              <div className="pt-10 pb-10">
                <img
                  className="rounded-full block m-auto text-center "
                  src="https://polyfood.store/assets/img/testimonial/guy1.jpg"
                />
              </div>

              <div className="text-xl pb-10">
                <i>
                  Hiếm có nhà hàng chay nào lại quan tâm tới khách hàng như Poly
                  Food, nhân viên tư vấn số lượng đồ ăn hợp lý, trước khi đóng
                  order hỏi khách có bị dị ứng với thành phần nào không. Thực sự
                  rất ấn tượng về chất lượng phục vụ cũng như đồ ăn của các bạn.
                  Chắc chắn sẽ quay lại vào lần gần nhất.
                </i>
              </div>
              <svg
                className="block m-auto text-center "
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path d="M224 32H64C46.3 32 32 46.3 32 64v64c0 17.7 14.3 32 32 32H441.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32H288V192H224v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32V256zM288 480V384H224v96c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
              </svg>
              <h5 className="h-[50px] text-[20px] pb-0 mb-0">LÊ THẮNG</h5>
              <p>Khách hàng</p>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle1} className="ml-5 mr-5 flex-col">
              <div className="pt-10 pb-10">
                <img
                  className="rounded-full block m-auto text-center "
                  src="https://polyfood.store/assets/img/testimonial/guy2.jpg"
                />
              </div>

              <div className="text-xl pb-10">
                <i>
                  Tuyệt vời từ không gian, dịch vụ cho đến đồ ăn đều rất tinh
                  tế. Chắc chắn sẽ quay lại cùng với gia đình trong tương lai.
                </i>
              </div>
              <svg
                className="block m-auto text-center "
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 512 512"
              >
                <path d="M224 32H64C46.3 32 32 46.3 32 64v64c0 17.7 14.3 32 32 32H441.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32H288V192H224v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32V256zM288 480V384H224v96c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
              </svg>
              <h5 className="h-[50px] text-[20px] pb-0 mb-0">NGÔ GIA HUY</h5>
              <p>Khách hàng</p>
            </h3>
          </div>
        </Carousel>
      </div>
      {/* Subscribe */}
      <div className="mt-10">
        <h1 className="font-semibold text-[80px]">Đăng ký</h1>
        <p className="opacity-75 text-gray mb-10">
          Đăng ký để nhận những thông báo mới nhất của chúng tôi
        </p>
        <input
          class="email text-center border-b-2 w-[475px] mb-5"
          type="email"
          placeholder="Địa chỉ email của bạn"
          required=""
          data-listener-added_9a23b976="true"
        ></input>

        <div>
          <Button className="subscribe mb-10" size="large">
            ĐĂNG KÝ
          </Button>
        </div>
      </div>
      {/* Footer of Homepage */}
      {/* <div className="mt-15">
        <div className="bg-gray-100 flex-col ml-5 mr-5 ">
          <div className="pt-10 pb-5">
            <img
              className="block m-auto text-center h-[80px]"
              src="https://polyfood.store/assets/img/logo/GSlogo.png"
            />
          </div>
          <p className="text-sm">
            Chúng tôi luôn cố gắng để phục vụ tốt nhất với khách hàng
          </p>
          <div className="flex items-center justify-center mt-10 pb-10">
            <svg
              className="social"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
            <span className="pr-2 pl-2 ">-</span>
            <svg
              className="social"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
            </svg>
            <span className="pr-2 pl-2 ">-</span>
            <svg
              className="social"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
            </svg>
            <span className="pr-2 pl-2 ">-</span>
            <svg
              className="social"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
            <span className="pr-2 pl-2 ">-</span>
            <svg
              className="social"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
            </svg>
          </div>
        </div>
        <div>
          <p className="opacity-75 text-gray mt-10 mb-5">
            Poly Food - © FPT Polytechnic Hà Nội
          </p>
        </div>
      </div> */}
    </>
  );
}

export default Home;
