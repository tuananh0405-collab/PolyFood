import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsList from "../data/Products";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { Segmented } from "antd";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const productId = useParams();
  const product = productsList.find((product) => product.id === productId.id);

  const [activeImg, setActiveImage] = useState(product.image);

  const [amount, setAmount] = useState(1);

  const [value, setValue] = useState("Mô tả chi tiết");

  return (
    <div>
      <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
        <a className="hover:text-red-600">
          <Link to="/">TRANG CHỦ </Link>
        </a>{" "}
        / CHI TIẾT SẢN PHẨM
      </div>
      <div className="flex content-start items-start flex-col justify-between lg:flex-row gap-16 lg:items-center m-auto w-4/5 mt-20 mb-20">
        {/* image  */}
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row justify-between h-24">
            <img
              src="https://i.ex-cdn.com/mgn.vn/files/content/2023/05/08/kimetsu-no-yaiba-1146.jpg"
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() =>
                setActiveImage(
                  "https://i.ex-cdn.com/mgn.vn/files/content/2023/05/08/kimetsu-no-yaiba-1146.jpg"
                )
              }
            />
            <img
              src={product.image}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(product.image)}
            />
            <img
              src={product.image}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(product.image)}
            />
            <img
              src={product.image}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(product.image)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4 content-start ">
          <div>
            <p className="uppercase pb-2 text-left text-3xl">{product.name}</p>
          </div>
          <div className="flex items-center text-left">
            <p className="text-red-500 text-3xl" style={{ fontSize: "17px" }}>
              {product.price * 1.0 * (1 - product.discount / 100)} VND{" "}
            </p>
            <p className="text-black pr-1 pl-1">
              <b>-</b>
            </p>
            <p className="line-through opacity-50">{product.price} VND</p>
          </div>
          <p className="text-left mb-10">{product.shortDescription}</p>
          <hr className="border border-gray-200 mb-10" />
          <div className="flex flex-row items-center gap-12 mb-5">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
              Thêm
            </button>
            <FavoriteBorderOutlinedIcon />
            <CompareArrowsOutlinedIcon />
          </div>
          <div className="text-left">
            <p>Danh mục : {product.category}</p>
            <p className="">
              Nhãn :{" "}
              <button className="border rounded-lg text-gray-400 hover:text-red-500 pr-2 pl-2">
                {product.tag}
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* describe and comment  */}
      <div className="text-3xl">
        <Segmented
          className=""
          size="large"
          options={["Mô tả chi tiết", "Đánh giá"]}
          value={value}
          onChange={setValue}
        />
        <hr className="border border-gray-600 mb-20"></hr>
        {value == "Mô tả chi tiết" ? <div>text abc</div> : <div>comment</div>}
      </div>
    </div>
  );
};
