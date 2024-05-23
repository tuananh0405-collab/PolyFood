import React,{useState, useEffect} from "react";
import Carousel from "react-elastic-carousel";
import RoundImage from "./RoundImage";
// import productsList from "../data/Products";
import axios from "axios";

const ProductCarousel = () => {
  const [productsList, setProductsList] = useState([]); // Initialize productsList state

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user-request/getAllProducts"
      );
      const fetchedProducts = response.data; // Assuming the fetched data is an array of products
      setProductsList(fetchedProducts); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const productList = productsList;

  return (
    <div className="ProductCarousel  ">
      <div className="w-full h-[350px] flex items-center justify-center">
        <Carousel
          breakPoints={breakPoints}
          className="h-[350px]"
          isAutoPlay
          enableAutoPlay={true}
          autoPlaySpeed={3000}
          isInfinite
        >
          {productList.map((item) => (
            <RoundImage item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;
