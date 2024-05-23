import React, { useState, useEffect } from "react";
import "./Header.css";
import { Button, Dropdown, Input } from "antd";
import { Link } from "react-router-dom";
import { Space } from "antd";
import { useStateValue } from "../context/StateProvider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const hasToken = localStorage.getItem("token") !== null;

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {},
    });
  };

  const [totalQuantity, setTotalQuantity] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let updatedTotalQuantity = 0;
    let updatedTotalPrice = 0;

    basket.forEach((product) => {
      updatedTotalQuantity += product.quantity;
      updatedTotalPrice += product.quantity * product.price;
    });

    setTotalQuantity(updatedTotalQuantity);
    setTotalPrice(updatedTotalPrice);
  }, [basket]);

  const [show, setShow] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Tieng Viet
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          English
        </a>
      ),
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const menu = (
    <div className="searchDropDown border p-2 mt-2">
      <Search placeholder="Nhập mã đơn hàng" onSearch={onSearch} enterButton />
    </div>
  );
  const handleLoginRegister = () => {
    navigate("/login_register");
  };
  const menu1 = (
    <>
      <div
        onClick={handleLoginRegister}
        className="border   bg-white leading-9 text-base"
      >
        <div className="hover-div">
          <p className="hover:cursor-pointer hover:text-orange-400 hover-text">
            Đăng nhập
          </p>
        </div>
      </div>
    </>
  );
  const menu2 = (
    <>
      <div className="border p-2   bg-white leading-9 text-base">
        <div className="hover-div">
          <p className="hover:cursor-pointer hover:text-orange-400 hover-text">
            Tài khoản của tôi
          </p>
        </div>
        <div className="hover-div">
          <p className="hover:cursor-pointer hover:text-orange-400 hover-text">
            Lịch sử đơn hàng
          </p>
        </div>
        <div className="hover-div">
          <p
            className="hover:cursor-pointer hover:text-orange-400 hover-text"
            onClick={handleLogout}
          >
            Đăng xuất
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className={`header mb-10  ${isScrolled ? "scrolled" : ""}`}>
      <div className={`header1 ${isScrolled ? "hidden" : ""}`}>
        {/* languages   */}
        <div className="languages">
          <Dropdown
            className="border-none"
            menu={{
              items,
            }}
            placement="bottomLeft"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <Button className="flex items-center ">
              English{" "}
              <svg
                className="w-5 text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </Button>
          </Dropdown>
        </div>
        {/* delivery  */}
        <div className="delivery">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" />
          </svg>
          <p>Nationwide & Fast Delivery</p>
        </div>
      </div>
      <hr />
      <div className={`header2 ${isScrolled ? "active" : ""}`}>
        {/* logo  */}
        <div className="logo w-1/5">
          <a>
            <Link to="/">
              <img
                className="w-[450px]"
                src="https://res.cloudinary.com/do9rcgv5s/image/upload/v1692137209/e2nw6oqvtlvpqmdwtmnh.png"
                alt="logo.image"
              />
            </Link>
          </a>
        </div>
        {/* main bar  */}
        <div className="mainBar justify-center w-3/5">
          <ul>
            <a>
              <Link to="/">
                <li>Home</li>
              </Link>
            </a>
            <a>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
            </a>
            <a>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
            </a>
            <a>
              <Link to="/about_us">
                <li>About Us</li>
              </Link>
            </a>
            <a>
              <Link to="/contact_us">
                <li>Contact Us</li>
              </Link>
            </a>
          </ul>
        </div>
        {/* options  */}
        <div className="options  justify-center w-1/5">
          <div className="option search hover:bg-red">
            <button>
              <a>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </Space>
                  </a>
                </Dropdown>
              </a>
            </button>
          </div>
          <div className="option account">
            <button>
              <a>
                <Dropdown
                  overlay={hasToken ? menu2 : menu1}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                      </svg>
                    </Space>
                  </a>
                </Dropdown>
              </a>
            </button>
          </div>
          <div className="option compare">
            <button>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M320 488c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1s14.2 12.4 14.2 21.9v40h16c35.3 0 64-28.7 64-64V153.3C371.7 141 352 112.8 352 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V320c0 70.7-57.3 128-128 128H320v40zM456 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM192 24c0-9.5 5.6-18.1 14.2-21.9s18.8-2.3 25.8 4.1l80 72c5.1 4.6 7.9 11 7.9 17.8s-2.9 13.3-7.9 17.8l-80 72c-7 6.3-17.2 7.9-25.8 4.1s-14.2-12.4-14.2-21.9V128H176c-35.3 0-64 28.7-64 64V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-70.7 57.3-128 128-128h16V24zM56 432a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
                </svg>
              </a>
            </button>
          </div>
          <div className="option wishlist">
            <button>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
              </a>
            </button>
          </div>
          <div className="cart-container">
            <div className="option cart relative">
              <Link to="/cart" className="cart-link">
                <button className="cart-button">
                  <ShoppingCartOutlinedIcon className="cart-icon text-black hover:text-red-500" />
                </button>
              </Link>
              <div className="cart-count bg-black text-white absolute top-[-10px] right-0 w-5 h-5 flex items-center justify-center rounded-full text-sm">
                {totalQuantity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
