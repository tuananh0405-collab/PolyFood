import "./ProductCard.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useStateValue } from "../../../context/StateProvider";
import { Link } from "react-router-dom";
import { Button, message, Space } from "antd";
import { useState } from "react";

const generateStarIcons = (rating) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const starIcons = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= filledStars) {
      starIcons.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    } else {
      starIcons.push(
        <svg
          key={i}
          className="w-4 h-4 text-gray-300 dark:text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
  }

  return starIcons;
};
const ProductCard = ({ product, id }) => {
  const [added, setAdded] = useState(false);
  const [addedProducts, setAddedProducts] = useState({}); // State to track added products

  const isAdded = addedProducts[product.id] || false;
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Đã thêm vào giỏ hàng",
    });
  };
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.name,
        image: product.image,
        price: product.price,
        rating: product.rating,
        quantity: 1,
      },
    });
    setAddedProducts(prevState => ({ ...prevState, [product.id]: true }));

    // alert("added to the basket")
    // success();
  };

  return (
    <div className="shop w-[15rem] m-3 transition-all cursor-pointer shadow-2xl hover:shadow-gray-500/50 productCard">
      {/* on image  */}
      <div className="w-[240px] h-[200px] relative">
        <Link to={`/product_detail/${id}`}>
          <img
            className="h-full w-full object-cover object-left-top block "
            src={product.image}
            alt=""
          />
        </Link>
        <div class=" flex items-center justify-center justify-between  w-full    ">
          {/*  */}
          <div className="hover:bg-orange-600 w-1/6 flex items-center justify-center duration-400 opacity-0 h-0 hoverProduct bg-orange-400 absolute bottom-0 ">
            <FavoriteBorderIcon className="text-white" />
          </div>
          {!isAdded ? (
            <div className="hover:bg-orange-600 w-2/3 flex items-center justify-center duration-500 opacity-0 h-0 hoverProduct  bg-orange-400 absolute bottom-0 left-10">
              <ShoppingCartOutlinedIcon className="text-white" />
              {contextHolder}

              <button
                className="text-white"
                onClick={() => {
                  addToBasket();
                  success();
                  setAdded(true);
                }}
              >
                Thêm vào giỏ
              </button>
            </div>
          ) : (
            <div className=" w-2/3 flex items-center justify-center duration-500 opacity-0 h-0 hoverProduct  bg-black absolute bottom-0 left-10">
              <ShoppingCartOutlinedIcon className="text-white" />
              {contextHolder}

              <button className="text-white">Đã thêm vào giỏ</button>
            </div>
          )}

          <div className="hover:bg-orange-600 w-1/6 flex items-center justify-center duration-1000 opacity-0 h-0 hoverProduct bg-orange-400 absolute bottom-0 right-0">
            <RemoveRedEyeOutlinedIcon className="text-white" />
          </div>
        </div>
        <div className="absolute top-2  right-2 h-full  ">
          {product.discount !== 0 ? (
            <div className="bg-red-600 text-white rounded-lg pl-2 pr-2 h-1/6 flex  items-center justify-center ">
              - {product.discount}%
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="applications hidden">
          <div className="absolute flex bg-red-600 z-10 bottom-0">
            <div className="h-10 w-10 text-white items-center justify-center border-r">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 top-2 left-1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="h-10 w-40 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <p className="pl-1">Thêm vào giỏ</p>
            </div>
            <div className="h-10 w-10 text-white items-center justify-center border-l">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 top-2 left-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* product details */}
      <div className="textPart bg-white p-3">
        <div>
          <p className="uppercase pb-2" style={{ fontSize: "20px" }}>
            {product.name}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="" style={{ fontSize: "17px" }}>
            {product.price * 1.0 * (1 - product.discount / 100)} VND{" "}
          </p>
          <p className="text-black pr-1 pl-1">
            <b>-</b>
          </p>
          <p className="line-through opacity-50">{product.price} VND</p>
        </div>
      </div>
      {/* rating  */}
      <div className="flex items-center space-x-1 justify-center pb-2">
        {generateStarIcons(product.rating)}
      </div>
    </div>
  );
};

export default ProductCard;
