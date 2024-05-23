import React, { useState } from "react";
import useDocumentTitle from "../../../title/UseDocumentTitle";

import { Link } from "react-router-dom";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import './AboutUs.css'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function AboutUs() {
  useDocumentTitle('About Us')

  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="mb-40">
      <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
        <a className="hover:text-red-600">
          <Link to="/">TRANG CHỦ </Link>
        </a>{" "}
        / GIỚI THIỆU
      </div>
      {/* Intro */}
      <div className="mt-10  flex-col items-center">
        <h5 className="op-70 text-gray-500">Giới thiệu</h5>
        <h2 className="text-[50px] mb-3">Chào mừng tới Poly Food</h2>
        <hr className="h-1 border-black bg-black w-[100px] m-auto" />
        <p className="mt-10 text-justify pr-[200px] pl-[200px] pb-10">
          Hơn 10 năm hình thành và phát triển, thương hiệu thực phẩm chay “Poly
          Food” đã khẳng định được uy tín của mình trên thị trường với đa dạng
          mặt hàng, chất lượng dịch vụ, chất lượng sản phẩm. Chúng tôi luôn
          hướng tới sức khỏe người tiêu dùng luôn được đặt lên hàng đầu, cam kết
          sản phẩm đưa ra luôn được đảm bảo, uy tín, nguồn gốc xuất xứ rõ ràng,
          giấy tờ pháp lý đầy đủ, không chất phụ gia, không chất bảo quản, được
          sản xuất sạch sẽ, vệ sinh an toàn thực phẩm, đảm bảo sức khỏe người
          tiêu dùng. Điều đó làm nên thương hiệu “Poly Food” chúng tôi ngày hôm
          nay. Chúng tôi luôn cố gắng để phục vụ tốt nhất đến quý khách hàng.
        </p>
      </div>
      {/* uy tín đồng hành trách nhiệm  */}
      <div className="mt-10">
        <div className="flex  pl-5 pr-5  w-full justify-between">
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://polyfood.store/assets/img/banner/ut.jpg"
              class=" transition duration-300 ease-in-out hover:scale-110 h-full w-full"
            />
          </div>
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
            <img
              src="https://polyfood.store/assets/img/banner/dh.jpg"
              class=" transition duration-300 ease-in-out hover:scale-110 h-full"
            />
          </div>
          <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
            <img
              src="https://polyfood.store/assets/img/banner/tn.jpg"
              class=" transition duration-300 ease-in-out hover:scale-110 h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mr-10 mt-10">
        <div>
          <h3 className="font-bold text-[30px] ml-5 text-left mb-5">Uy Tín</h3>
          <p className=" text-justify  pb-10 ml-5 w-[300px]">
            Uy tín là điều Poly Food đã gây dựng và khẳng định được trong gần 10
            năm qua. Chúng tôi sẽ tiếp tục giữ vững giá trị kinh doanh cốt lõi
            này trong suốt chặng đường phía trước để phát triển bền vững.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[30px] ml-5 text-left mb-5">
            Đồng Hành
          </h3>
          <p className=" text-justify  pb-10 ml-5 w-[300px]">
            Đồng hành là cam kết và cũng là giá trị nổi bật của Poly Food. Chúng
            tôi đồng hành cùng nhà cung cấp, đồng hành cùng khách hàng và đồng
            hành cùng khách hàng của khách hàng.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[30px] ml-5 text-left mb-5">
            Trách Nhiệm
          </h3>
          <p className=" text-justify  pb-10 ml-5 w-[300px]">
            Trách nhiệm là nền tảng tạo nên chất lượng của sản phẩm & dịch vụ
            của Poly Food, từ đó mới khiến khách hàng hài lòng và gắn bó lâu
            dài.
          </p>
        </div>
      </div>
      {/* FunFact */}
      <div className="flex bg-gray-200 h-[100px] h-[250px] justify-around items-center justify-center gap-2 pt-5 pb-5">
        <div className="w-1/4">
          <EmojiEventsOutlinedIcon
            sx={{ fontSize: "80px", fontWeight: "light" }}
          />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text-red-600 text-[40px]">
              {counterOn && <CountUp start={0} end={100} duration={2} />}
            </div>
          </ScrollTrigger>
          <h2 className="text-[20px] opacity-80">
            Được Cấp Chứng Nhận Cơ Sở An Toàn Thực Phẩm
          </h2>
        </div>
        <div className="w-1/4">
          <LightbulbOutlinedIcon sx={{ fontSize: "80px" }} />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text-red-600 text-[40px]">
              {counterOn && <CountUp start={0} end={100} duration={2} />}
            </div>
          </ScrollTrigger>
          <h2 className="text-[20px] opacity-80">
            Đảm Bảo Tiêu Chuẩn An Toàn Vệ Sinh Thực Phẩm
          </h2>
        </div>
        <div className="w-1/4 pb-7">
          <BusinessCenterOutlinedIcon sx={{ fontSize: "80px" }} />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text-red-600 text-[40px]">
              {counterOn && <CountUp start={0} end={1000} duration={2} />}
            </div>
          </ScrollTrigger>
          <h2 className="text-[20px] opacity-80">
            Tận Tâm, Trách Nhiệm, Nhiệt Tình
          </h2>
        </div>
        <div className="w-1/4 pb-7">
          <TagFacesOutlinedIcon sx={{ fontSize: "80px" }} />
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="text-red-600 text-[40px]">
              {counterOn && <CountUp start={0} end={1000} duration={2} />}
            </div>
          </ScrollTrigger>
          <h2 className="text-[20px] opacity-80">Khách Hàng Hài Lòng</h2>
        </div>
      </div>
      {/* Members */}
      <div>
        <h2 className="text-[30px] mt-10 mb-3">Thành viên nhóm</h2>
        <hr className="h-1 border-black bg-black w-[100px] m-auto" />

        <div className="flex  h-[100px] h-[250px] justify-around items-center justify-center gap-5 mt-20 pl-10 pr-10">
          <div className="w-1/4 relative">
            <img
              className="w-full h-full object-cover block"
              src="https://res.cloudinary.com/doedovklj/image/upload/v1690815709/xyz-abc_638264377054628198image.jpg"
            />
            <div className="absolute top-0 content-center left-0 h-full w-full  flex  items-center justify-center gap-3 hoverContact">
              <div className="bg-white w-full h-1/6 flex  items-center justify-center gap-3">
                <a href="//www.facebook.com" target="_blank">
                  <FacebookOutlinedIcon className="hover:text-white hover:cursor-pointer text-blue-800" />
                </a>
                <a href="//www.twitter.com" target="_blank">
                  <TwitterIcon className="hover:opacity-50 hover:cursor-pointer text-blue-600" />
                </a>
                <a href="//www.instagram.com" target="_blank">
                  <InstagramIcon className="hover:opacity-50 hover:cursor-pointer text-orange-600" />
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-[40px] flex items-center justify-center text-[20px]">
              Lê Văn Thuận
            </div>
          </div>
          <div className="w-1/4 relative">
            <img
              className="w-full h-full object-cover block"
              src="https://res.cloudinary.com/doedovklj/image/upload/v1690815709/xyz-abc_638264377054628198image.jpg"
            />
            <div className="absolute top-0 content-center left-0 h-full w-full  flex  items-center justify-center gap-3 hoverContact">
              <div className="bg-white w-full h-1/6 flex  items-center justify-center gap-3">
                <a href="//www.facebook.com" target="_blank">
                  <FacebookOutlinedIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.twitter.com" target="_blank">
                  <TwitterIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.instagram.com" target="_blank">
                  <InstagramIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-[40px] flex items-center justify-center text-[20px]">
              Lê Văn Thuận
            </div>
          </div>
          <div className="w-1/4 relative">
            <img
              className="w-full h-full object-cover block"
              src="https://res.cloudinary.com/doedovklj/image/upload/v1690815709/xyz-abc_638264377054628198image.jpg"
            />
            <div className="absolute top-0 content-center left-0 h-full w-full  flex  items-center justify-center gap-3 hoverContact">
              <div className="bg-white w-full h-1/6 flex  items-center justify-center gap-3">
                <a href="//www.facebook.com" target="_blank">
                  <FacebookOutlinedIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.twitter.com" target="_blank">
                  <TwitterIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.instagram.com" target="_blank">
                  <InstagramIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-[40px] flex items-center justify-center text-[20px]">
              Lê Văn Thuận
            </div>
          </div>
          <div className="w-1/4 relative">
            <img
              className="w-full h-full object-cover block"
              src="https://res.cloudinary.com/doedovklj/image/upload/v1690815709/xyz-abc_638264377054628198image.jpg"
            />
            <div className="absolute top-0 content-center left-0 h-full w-full  flex  items-center justify-center gap-3 hoverContact">
              <div className="bg-white w-full h-1/6 flex  items-center justify-center gap-3">
                <a href="//www.facebook.com" target="_blank">
                  <FacebookOutlinedIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.twitter.com" target="_blank">
                  <TwitterIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.instagram.com" target="_blank">
                  <InstagramIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-[40px] flex items-center justify-center text-[20px]">
              Lê Văn Thuận
            </div>
          </div>
        </div>
        <div className="flex  h-[100px] h-[250px]  items-center justify-start  gap-5 mt-20 pl-10 pr-10 pt-20">
          <div className="w-1/4 relative">
            <img
              className="w-full h-full object-cover block"
              src="https://res.cloudinary.com/doedovklj/image/upload/v1690815709/xyz-abc_638264377054628198image.jpg"
            />
            <div className="absolute top-0 content-center left-0 h-full w-full  flex  items-center justify-center gap-3 hoverContact">
              <div className="bg-white w-full h-1/6 flex  items-center justify-center gap-3">
                <a href="//www.facebook.com" target="_blank">
                  <FacebookOutlinedIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.twitter.com" target="_blank">
                  <TwitterIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.instagram.com" target="_blank">
                  <InstagramIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-[40px] flex items-center justify-center text-[20px]">
              Lê Văn Thuận
            </div>
          </div>
          <div className="w-1/4 relative">
            <img
              className="w-full h-full object-cover block"
              src="https://res.cloudinary.com/doedovklj/image/upload/v1690815709/xyz-abc_638264377054628198image.jpg"
            />
            <div className="absolute top-0 content-center left-0 h-full w-full  flex  items-center justify-center gap-3 hoverContact">
              <div className="bg-white w-full h-1/6 flex  items-center justify-center gap-3">
                <a href="//www.facebook.com" target="_blank">
                  <FacebookOutlinedIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.twitter.com" target="_blank">
                  <TwitterIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
                <a href="//www.instagram.com" target="_blank">
                  <InstagramIcon className="hover:opacity-50 hover:cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="bg-gray-200 h-[40px] flex items-center justify-center text-[20px]">
              Lê Văn Thuận
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
