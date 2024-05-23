import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Input, Space } from "antd";
import { Select } from "antd";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import productsList from "../data/Products";
import ProductCard from "./ProductCard";
import "./Shop.css";
import GridViewIcon from "@mui/icons-material/GridView";
import WindowIcon from "@mui/icons-material/Window";
import AppsIcon from "@mui/icons-material/Apps";
import { ProductDetail } from "./ProductDetail";
import useDocumentTitle from "../../../title/UseDocumentTitle";

function Shop() {
  useDocumentTitle("Product");

  const { Search } = Input;

  // filter
  const [item, setItem] = useState(productsList);
  const menuItems = [];
  productsList.map((val) => {
    if (!menuItems.includes(val.category[0])) menuItems.push(val.category[0]);
  });

  const filterItem = (currentCategory) => {
    const newItem = productsList.filter((newProduct) => {
      return newProduct.category[0] === currentCategory;
    });
    setItem(newItem);
  };

  // set for default item 
  const [item1, setItem1] = useState(productsList);
  const menuItems1 = [];
  productsList.map((val) => {
    if (!menuItems1.includes(val.category[0])) menuItems1.push(val.category[0]);
  });

  const filterItem1 = (currentCategory) => {
    const newItem1 = productsList.filter((newProduct) => {
      return newProduct.category[0] === currentCategory;
    });
    setItem1(newItem1);
  };
  
  const handleChange = (value) => {
    if (value === "Giá từ thấp đến cao") {
      const sortedItems = [...item];
      sortedItems.sort(
        (a, b) =>
          a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100)
      );
      setItem(sortedItems);
    } else if (value === "Giá từ cao đến thấp") {
      const sortedItems1 = [...item];
      sortedItems1.sort(
        (a, b) =>
          b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100)
      );
      setItem(sortedItems1);
    } else if (value === "Mặc định") {
     setItem(item1)
    }
  };
  // pagination
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = item.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = item.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // items per row
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const rows = Math.ceil(currentProducts.length / itemsPerRow);

  const itemRows = Array.from({ length: rows }, (_, index) =>
    currentProducts.slice(index * itemsPerRow, (index + 1) * itemsPerRow)
  );

  // filter options
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filterOptions = (category) => {
    setSelectedCategory(category);
  };

  const iconArray = [<FormatListBulletedIcon />, <WindowIcon />, <AppsIcon />];
  const [clickedIcons, setClickedIcons] = useState(
    new Array(iconArray.length).fill(false)
  );
  const handleIconClick = (index) => {
    setItemsPerRow(index + 1);
    console.log("itemsPerRow: " + itemsPerRow);
    const newClickedIcons = [...clickedIcons];
    newClickedIcons.fill(false);
    newClickedIcons[index] = true;
    setClickedIcons(newClickedIcons);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const onSearch = (e) => {
    const itemAfterSearch = productsList.filter((product) =>
      product.name.toLowerCase().includes(e.toLowerCase())
    );
    setItem(itemAfterSearch);
    console.log(item);
  };
  return (
    <div className="mb-20">
      <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
        <a className="hover:text-red-600">
          <Link to="/">TRANG CHỦ </Link>
        </a>{" "}
        / SẢN PHẨM
      </div>
      {/* main shop page */}
      <div className="flex mt-10">
        {/* filter and search */}
        <div className="w-1/4   pl-12">
          <p className="text-xl pt-5 pb-5 text-left">Tìm kiếm sản phẩm</p>
          <Search
            size="large"
            className="rounded-none text-left"
            placeholder="Nhập tên sản phẩm "
            onSearch={(e) => onSearch(e)}
            style={{
              width: 200,
            }}
          />
          <p className="text-xl pt-10 pb-5 text-left">Theo Danh Mục</p>
          <div className="text-left leading-10 text-l">
            <div className="" onClick={() => setItem(productsList)}>
              <input type="checkbox" className="mr-5 accent-red-500" /> Tất Cả
              Danh Mục
            </div>
            <div>
              {menuItems.map((category, id) => {
                return (
                  <div onClick={() => { filterItem(category); filterItem1(category); }} key={id}>
                    <div onClick={() => filterOptions(category)} key={id}>
                      <input
                        type="checkbox"
                        className="mr-5 accent-red-500"
                        checked={selectedCategory === category}
                        readOnly
                      />{" "}
                      {category}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-xl pt-10 pb-5 text-left">Nhãn</div>
            <div className="flex flex-wrap justify-start ">
              {menuItems.map((item, id) => (
                <div
                  onClick={() => filterItem(item)}
                  key={id}
                  className="text-center m-5 rounded-full bg-gray-200 w-fit pr-1 pl-1 hover:bg-orange-400 hover:text-white hover:cursor-pointer duration-500 grow"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* products list */}
        <div className="w-3/4  ">
          <div className="flex justify-between pr-10">
            {/* sorting by price  */}
            <div className="flex gap-5">
              <Select
                defaultValue="Mặc định"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "Mặc định",
                    label: "Mặc định",
                  },
                  {
                    value: "Giá từ thấp đến cao",
                    label: "Giá từ thấp đến cao",
                  },
                  {
                    value: "Giá từ cao đến thấp",
                    label: "Giá từ cao đến thấp ",
                  },
                ]}
              />
              <div>
                {currentProducts.length} / {totalProducts} sản phẩm
              </div>
            </div>
            {/* gird icon  */}
            <div className="flex gap-2">
              {iconArray.map((icon, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    clickedIcons[index] ? "clicked" : ""
                  }`}
                  onClick={() => handleIconClick(index)}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
          {/* Display  */}
          <div className="">
            {itemRows.map((row, rowIndex) => (
              <div
                className="flex items-center justify-center "
                key={rowIndex}
              >
                {row.map((product) => (
                
                    <div className="grow">
                      <ProductCard product={product} id={product.id}/>
                    </div>
                ))}
              </div>
            ))}

            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`${
                    currentPage === index + 1 ? "active" : ""
                  } p-5 border rounded-full  mr-2 text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white duration-500 shadow-lg shadow-gray-500/50`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
