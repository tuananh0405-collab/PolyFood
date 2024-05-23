import React from "react";
import { Textarea,  Button  } from "@material-tailwind/react";

const Comment = () => {
  return (
    <div className="Comment h-[600px]">
      <div className="pl-[60px] pr-[60px]">
        <h3 className="text-left font-bold tracking-wide text-lg">BÌNH LUẬN</h3>
        <div className="flex pt-6 pb-6">
          <div className="w-[120px] h-[149px]">
            <img
              src="https://polyfood.store/assets/img/team/user.png"
              alt=""
            ></img>
          </div>
          <div className="pl-4">
            <p className="text-left">Lê Hùng</p>
            <p className="text-left">5 July, 2023</p>
            <p className="text-left text-xs text-gray-800 pt-1">Ăn chay tốt cho sức khỏe</p>
          </div>
        </div>
        <div className="flex pl-20 pb-6">
          <div className="w-[120px] h-[149px]">
            <img
              src="https://polyfood.store/assets/img/team/user.png"
              alt=""
            ></img>
          </div>
          <div className="pl-4">
            <p className="text-left">Nguyễn Đức Thắng</p>
            <p className="text-left">12 July, 2023</p>
            <p className="text-left text-xs text-gray-800 pt-1">Đúng vậy</p>
          </div>
        </div>
      </div>
      <div  className="pl-[60px] pr-[60px]">
        <h3 className="text-left font-bold tracking-wide text-lg">
          ĐĂNG BÌNH LUẬN
        </h3>
        <div className="w-[1180px] pt-6 pb-4">
          <Textarea placeholder="Nhập nội dung" className="col-end-8 pl-4 pt-2 text-base"/>
        </div>
        <div className="w-[110px] h-[50px] bg-red-600 hover:bg-black hover:cursor-pointer transition duration-300">
            <p className="pt-3 text-white">Submit</p>
        </div>

      </div>
    </div>
  );
};

export default Comment;
