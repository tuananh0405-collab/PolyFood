import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const {token} = useParams();
  useEffect(() => {
    loadUsers();
  }, []);
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/auth/admin/getAllProducts",
      {headers}
    );
    setProduct(result.data);
  };
  const productGet=async(id)=>{
    const result = await axios.get(
      `http://localhost:8080/api/v1/auth/admin/getProductById/${id}`,
      {headers}
    );
    setProduct(result)
    console.log(product);

  }
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    product_name: "",
    product_image: "",
    category: "",
    stock: "",
    price: "",
    discount: "",
    rating: "",
  });
  const {
    product_name,
    product_image,
    category,
    stock,
    price,
    discount,
    rating,
  } = product;
  const onInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/api/v1/auth/admin/updateProductById/${id}`,
      product,
      {headers}
    );
    navigate(`/adminuser/${token}`);
  };

  return (
    <div>
      <section class="mb-12 mt-10 bg-white dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Edit User With Id: {id}
              </h1>
              <form
                onSubmit={(e) => onSubmit(e)}
                class="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your product_name
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="product_name"
                    required=""
                    value={product_name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your product_image
                  </label>
                  <input
                    type="text"
                    name="product_image"
                    id="product_image"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="product_image"
                    required=""
                    value={product_image}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="category"
                    required=""
                    value={category}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your price
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="price"
                    required=""
                    value={price}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your stock
                  </label>
                  <input
                    type="text"
                    name="stock"
                    id="stock"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="stock"
                    required=""
                    value={stock}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your discount
                  </label>
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="discount"
                    required=""
                    value={discount}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your rating
                  </label>
                  <input
                    type="text"
                    name="rating"
                    id="rating"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="rating"
                    required=""
                    value={rating}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Edit
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    onClick={() => {
                      // setLoginRegister(true);
                    }}
                  >
                    <Link to={`/adminuser/${token}`}>Back</Link>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProduct;
