import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
function ScrollToTop() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop && (
        <div
          className="scrollToTop p-3 flex items-center justify-center"
          onClick={scrollUp}
        >
          <KeyboardDoubleArrowUpIcon className="scrollItem " />
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
