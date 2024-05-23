import React from "react";
import { Link } from "react-router-dom";

const BlogError404 = () => {
  return (
    <div className="BlogError404">

      {/* Back to Home */}
      <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
            <a className="hover:text-red-600">
              <Link to="/">TRANG CHỦ </Link>
            </a>{" "}
            / 404 PAGE
          </div>

      {/* Info */}

      <div className="pl-[70px] pr-[50px] pb-8">
        <div className="">
          <p className="text-purple-600 tracking-wide text-[272px] leading-[300px] font-semibold">
            404
          </p>
        </div>
        <div className="">
          <p>
            <b>OPPS! PAGE NOT FOUND</b>
          </p>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed, name changed or is temporarity unavailable.
          </p>
        </div>
        

        <div className="w-full h-full flex items-center justify-center pt-6">
          <input
            className="border w-[670px] h-[45px] pl-4"
            id="search"
            name="search"
            placeholder="Search..."
            type="text"
          ></input>
          <div className="w-[70px] h-[45px] bg-purple-600 flex items-center justify-center text-white hover:bg-black hover:cursor-pointer">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center pt-6">
          <div className="w-[184px] h-[55px] bg-purple-600 text-center hover:bg-black hover:cursor-pointer">
            <p className="text-white pt-4">Back to home page</p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default BlogError404;
