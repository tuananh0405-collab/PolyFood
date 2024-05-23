import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const UserManagement = ({token}) => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
    // console.log("jwt");
  }, []);
  // const loadUsers = async () => {
  //   const result = await axios.get(
  //     "http://localhost:8080/api/v1/auth/admin/getAllUsers"
  //   );
  //   // console.log(result.data);
  //   setUsers(result.data);

  // };


  

    const headers = {
      Authorization: `Bearer ${token}`,
    };
  const loadUsers = async () => {
    

    try {
      const result = await axios.get(
        "http://localhost:8080/api/v1/auth/admin/getAllUsers",
        { headers }
      );
      // console.log(result.data);
      setUsers(result.data);
    } catch (error) {
      // Handle error here
      console.error("Error loading users:", error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `http://localhost:8080/api/v1/auth/admin/deleteUserById/${id}`,
      {headers}
    );
    loadUsers();
  };
  return (
    <>
      <div className="">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  User name
                </th>
                <th scope="col" class="px-6 py-3">
                  Phone
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Address
                </th>

                <th scope="col" class="px-6 py-3">
                  Action
                </th>
                <th scope="col" class="px-6 py-3">
                  Orders
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <th
                    key={index}
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.user_name}
                  </th>
                  <td class="px-6 py-4">{user.mobile_number}</td>
                  <td class="px-6 py-4">{user.email}</td>
                  <td class="px-6 py-4">{user.address}</td>
                  <td>
                    <Link to={`/adminuser/${token}/viewUser/${user.user_id}`}>
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        View
                      </button>
                    </Link>
                    <Link to={`/adminuser/${token}/editUser/${user.user_id}`}>
                      <button
                        type="button"
                        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => deleteUser(user.user_id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="flex items-center justify-center mt-4">
                    <a>
                      <Link to={`/adminuser/${token}/viewUserOders/${user.user_id}`}>
                        See
                      </Link>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
