// import React from 'react'
import { Link } from "react-router-dom";
// import useDocumentTitle from "../../../UseDocumentTitle";

// function Blog() {
//   useDocumentTitle('Tin tức')

//   return (
//     <div>
//       <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
//         <a className="hover:text-red-600">
//           <Link to="/">TRANG CHỦ </Link>
//         </a>{" "}
//         / TIN TỨC
//       </div>
//     </div>
//   )
// }

// export default Blog

import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import BlogList from "./BlogList";
import { api_blog } from "./api_blog";
import Pagination from "./Pagination";
import useDocumentTitle from "../../../title/UseDocumentTitle";
const Blog = () => {
  // const items = [
  //   {
  //     key: "1",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.antgroup.com"
  //       >
  //         Tiếng Việt
  //       </a>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.aliyun.com"
  //       >
  //         English
  //       </a>
  //     ),
  //   },
  // ];
  useDocumentTitle("Tin tức");
  const [fix, setFix] = useState(false);
  const setFixed = () => {
    if (window.scrollY >= 140) {
      setFix(true);
    } else setFix(false);
  };

  window.addEventListener("scroll", setFixed);

  // ----------------------------------------------

  const blogData = api_blog;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = blogData.slice(firstPostIndex, lastPostIndex);

  // ----------------------------------------------

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-[625px] w-full bg-gray-200 flex items-center justify-center">
          <ClipLoader color="#36d7b7" className="h-10 w-10" />
        </div>
      ) : (
        <div className="Blog">
          <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
            <a className="hover:text-red-600">
              <Link to="/">TRANG CHỦ </Link>
            </a>{" "}
            / TIN TỨC
          </div>

          <div className="flex flex-wrap items-center justify-center pt-10 pb-10 gap-6">
            <div>
              <BlogList blogData={currentPosts} />
              <Pagination
                totalPosts={blogData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
