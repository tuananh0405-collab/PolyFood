import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Blog.css";
import Comment from "./Comment";
import { Link } from "react-router-dom";

const BlogItem = () => {
  
  return (
    <div className="BlogItem">

      {/* Back to Home */}
      <div className="bg-gray-300 h-[100px] flex items-center justify-center gap-2">
            <a className="hover:text-red-600">
              <Link to="/">TRANG CHỦ </Link>
            </a>{" "}
            / BLOG POST
          </div>

      {/* Infomation */}
      <div className="mt-10 w-11/12 m-auto ">
        <p className="text-gray-500 mb-2">Tin tức</p>
        <h2 className="text-4xl mb-5">ĂN CHAY - XU HƯỚNG MỚI CỦA LỐI SỐNG HIỆN ĐẠI</h2>
        {/* <p className="font-bold">___________________________</p> */}
        <hr className="h-1 border-black bg-black w-[100px] m-auto" />

        <p className="mt-10 text-gray-500 mb-2">Lê Văn Thuận</p>
        <div className="flex items-center justify-center">
          <img
            className=""
            src="https://res.cloudinary.com/doedovklj/image/upload/v1690815709/xyz-abc_638264377054628198image.jpg"
            alt=""
          ></img>
        </div>

        <p>
          Ăn chay ngày nay không còn giới hạn trong tôn giáo hay với những người
          giảm béo, chữa bệnh nữa mà đã trở thành xu hướng của thời đại. Ăn chay
          đang dần trở thành một ẩm thực thời thượng trong cuộc sống hiện đại ở
          các nước phát triển, đặc biệt trong giới trẻ, nghệ sĩ và trí thức.
        </p>
        <p>
          Giữa cuộc sống hối hả, bộn bề, nhiều người thích rủ nhau đến những
          quán cơm chay để tìm cho mình những giây phút bình yên, thư giãn, hay
          tự chế biến những món ăn chay giàu dinh dưỡng, ấm cúng tại nhà để cùng
          thưởng thức với bạn bè và người thân.
        </p>
        <p>
          Con số thống kê được tờ “Người Lao Động” đăng tải cho thấy ở Việt Nam
          có 10% người thường xuyên ăn chay; tại châu Âu, con số này là 20%.
        </p>
        <div className="flex items-center justify-center">
          <img
            className=""
            src="http://www.takyfood.com.vn/vnt_upload/news/12_2018/An-chay-xu-huong-hien-dai/cheYY-YoYY-thuaYYn-chay.jpg"
            alt=""
          ></img>
        </div>

        <p>Ăn chay mang lại sự cân bằng cho cơ thể và an lành cho tâm trí</p>
        <p>
          Khoa học dinh dưỡng đang đối đầu với thử thách: không chỉ mang lại sức
          khỏe cho cá nhân mà còn lợi ích cho sức khỏe môi trường. Vì vậy, cách
          lựa chọn thực phẩm lành mạnh không chỉ dừng ở thực phẩm mang tính dinh
          dưỡng, mà còn thực phẩm góp phần bảo vệ môi trường.
        </p>
        <p>
          Chế độ ăn từ thực vật hay chế độ ăn chay là con đường gần nhất đi đến
          sự giảm thiểu hủy hoại môi trường và chống lại biến đổi khí hậu.
        </p>
        <p>
          <b>Ẩm thực chay – một đặc thù của văn hóa Việt</b>
        </p>
        <p>
          Trong các bữa ăn của người Việt thường có thành phần rau, củ, quả
          nhiều hơn. Dân ta có câu “Cơm không rau như đau không thuốc”. Chúng ta
          ăn rau sống cả rổ trong khi dân Tây chỉ ăn 1 hay 2 lá salat mà thôi.
        </p>
        <p>
          Ẩm thực Việt không chỉ là một nghệ thuật mà nó còn hàm chứa tính triết
          lý trong đó: thức ăn là phải đủ tính âm dương, ngũ hành thì mới giữ
          được quân bình. Kim Mộc Thủy Hỏa Thổ được thể hiện trong ngũ sắc của
          các món ăn: trắng, vàng, xanh, đỏ, nâu; hay trong ngũ vị: chua, cay,
          măn, ngọt, bùi.
        </p>
        <p>
          Tính âm dương và ngũ hành phần lớn là do các loại rau củ hoa quả, các
          loại rau thơm như húng quế, tía tô, kinh giới, bạc hà và các gia vị
          như hành, tỏi, ớt, gừng, sả, chanh… tạo ra, mà những thứ này đồng thời
          cũng là những vị thuốc dân gian.
        </p>
        <p>
          Vì vậy các món ăn Việt không chỉ bắt mắt, giàu hương vị mà còn bổ
          dưỡng trong việc cung cáp đủ các thành phần như đạm, khoáng, chất béo
          không bão hòa, chất chua và chất xơ rất cần cho tiêu hóa. Thực đơn
          chay như vậy quả là một truyền thống ẩm thực Việt mà ít dân tộc nào có
          được, và vì thế rất được nhiều người trên thế giới ưa chuộng.
        </p>
        <p>
          <b>Lý do của việc ăn chay</b>
        </p>
        <p>
          Việt Nam có một nền văn hóa Phật giáo rất lâu đời. Theo đó lòng từ bi
          được biểu hiện trong việc cấm sát sinh – một trong năm giới luật của
          nhà Phật. Tất cả những sinh vật dù nhỏ như con kiến đến to hơn như con
          voi và ngay cả con người đều có quyền được sống.
        </p>
        <div className="flex items-center justify-center">
          <img
            src="http://www.takyfood.com.vn/vnt_upload/news/12_2018/An-chay-xu-huong-hien-dai/1684a323-4762-4a2a-b008-a758abccb062_an-chay-va-an-chay-de-khoe-2.jpg"
            alt=""
          ></img>
        </div>
        <p>
          <i>Theo quan niệm Phật giáo, ăn chay cũng giảm bớt tạo nghiệp</i>
        </p>
        <p>
          Khi người ta chọc tiết một con gà, con lợn hay con bò thì chúng đều có
          cảm xúc đau đớn, phải dãy dụa bất lực và la hét rống lên, phản ứng hận
          thù y như chúng ta vậy. Trong trạng thái bị giết như vậy các độc tố sẽ
          tan ra trong thịt mà chúng ta sẽ hấp thụ nó khi ăn và sinh lòng thù
          hận.
        </p>
        <p>
          Vì thế không sát sinh và không ăn thịt là cốt để nuôi dưỡng tâm an
          lạc, lòng từ bi, lòng thương đối với mọi con vật và cả đối với con
          người. Và khi ăn chay chúng ta cũng giảm bớt được việc tạo nghiệp.
        </p>
        <p>
          Xét về cơ quan tiêu hóa thì động vật ăn thịt luôn có hàm răng nhọn,
          kích thước ruột già ngắn để tống các chất độc nhanh. Còn động vật ăn
          cây cỏ thì có hàm răng phẳng, ruột dài hơn. Con người có hệ tiêu hóa
          thuộc loại thứ hai này.
        </p>
        <p>
          Ngoài ra cũng nên hiểu rằng chúng ta ăn uống là để hấp thụ các chất
          dinh dưỡng cho cơ thể bất kể từ thức ăn động vật hay thực vật miễn sao
          đầy đủ chất là được. Nhưng thức ăn thực vật sẽ mang lại nhiều lợi ích
          hơn, nếu chúng ta có kiến thức đầy đủ về khoa học ăn chay.
        </p>
      </div>

      {/* Comment */}
      <Comment />


    </div>
  );
};

export default BlogItem;
