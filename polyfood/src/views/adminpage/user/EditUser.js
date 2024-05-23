import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useDocumentTitle from "../../title/UseDocumentTitle";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const {token} = useParams();
  console.log(token);
  // console.log(id);
  let navigate = useNavigate();
  const [user, setUser] = useState({
    user_name: "",
    mobile_number: "",
    email: "",
    address: "",
  });
  const { user_name, mobile_number, email, address } = user;
  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2dXR1YW5hbmgwNDA1MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX0FETUlOIiwiUk9MRV9BRE1JTiJdLCJleHAiOjE2OTI4NjkzMzJ9.f-NBZLpnT5S48aJVvYui0VUffLPHKVPyWrdsWjmnFnY"; // Replace with your actual bearer token
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/api/v1/auth/admin/updateUserById/${id}`,
      user,
      {headers}
    );
    navigate("/adminuser");
  };
  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/auth/admin/getAllUsers",
      {headers}
    );
    setUser(result.data);
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
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="userName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your user name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="user_name"
                    required=""
                    value={user_name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="user_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your phone
                  </label>
                  <input
                    type="text"
                    name="mobile_number"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="mobile_number"
                    required=""
                    value={mobile_number}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <label
                    for="user_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="address"
                    required=""
                    value={address}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>

                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
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

export default EditUser;
