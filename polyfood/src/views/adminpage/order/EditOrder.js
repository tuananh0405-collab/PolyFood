import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditOrder = () => {
  const { userId } = useParams();
  const { orderId } = useParams();
const {token} = useParams();
console.log(token);
  console.log(userId);
  console.log(orderId);
  // useEffect(() => {
  //   loadUsers();
  // }, []);
  // const loadUsers = async () => {
  //   const result = await axios.get(
  //     "http://localhost:8080/api/v1/auth/getAllProducts"
  //   );
  //   setProduct(result.data);
  // };
  // const productGet=async(id)=>{
  //   const result = await axios.get(
  //     `http://localhost:8080/api/v1/auth/getProductById/${id}`
  //   );
  //   setProduct(result)
  //   console.log(product);

  // }
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
      original_price: "",
      actual_price: "",
      quantity: "",
  });
  const {
    name,
      original_price,
      actual_price,
      quantity,
  } = product;
  const onInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2dXR1YW5hbmgwNDA1MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIiwiUk9MRV9BRE1JTiJdLCJleHAiOjE2OTI4NjkzMzJ9.f-NBZLpnT5S48aJVvYui0VUffLPHKVPyWrdsWjmnFnY"; // Replace with your actual bearer token
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/api/v1/auth/admin/updateOrderById/${orderId}`,
      product,
      {headers}
    );
    navigate(`/adminuser/${token}/viewUserOders/${userId}`);
  };

  return (
    <div>
      <section class="mb-12 mt-10 bg-white dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Edit Order With Id: {orderId} of user: {userId}
              </h1>
              <form
                onSubmit={(e) => onSubmit(e)}
                class="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name"
                    required=""
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your original_price
                  </label>
                  <input
                    type="text"
                    name="original_price"
                    id="original_price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="original_price"
                    required=""
                    value={original_price}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your actual_price
                  </label>
                  <input
                    type="text"
                    name="actual_price"
                    id="actual_price"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="actual_price"
                    required=""
                    value={actual_price}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="quantity"
                    required=""
                    value={quantity}
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
                    <Link to="/adminuser">Back</Link>
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

export default EditOrder;
