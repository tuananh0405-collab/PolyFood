import "./App.css";
import ScrollToTop from "./views/scrolltotop/ScrollToTop";
import AboutUs from "./views/body/pages/aboutus/AboutUs";
import Home from "./views/body/pages/homes/Home";
import Shop from "./views/body/pages/shops/Shop";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./views/body/pages/contactus/ContactUs";
import { ProductDetail } from "./views/body/pages/shops/ProductDetail";
import Cart from "./views/body/pages/carts/Cart";
import LoginRegister from "./views/body/pages/loginregister/LoginRegister";
import Blog from "./views/body/pages/blog/Blog";
import BlogItem from "./views/body/pages/blog/BlogItem";
import BlogError404 from "./views/body/pages/blog/BlogError404";
import EditUser from "./views/adminpage/user/EditUser";
import EditOrder from "./views/adminpage/order/EditOrder";
import UserView from "./views/adminpage/user/UserView";
import HomeAdmin from "./views/adminpage/HomeAdmin";
import EditProduct from "./views/adminpage/product/EditProduct";
import OrderManagement from "./views/adminpage/order/OderManagement";
import Payment from "./views/body/pages/carts/Payment";
import PayHome from "./views/body/pages/carts/PayHome";
import VNPay from "./views/body/pages/carts/VNPay";
import CardPay from "./views/body/pages/carts/CardPay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/adminuser/:token" element={<HomeAdmin />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <ScrollToTop />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              <Header />
              <Blog />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="/about_us"
          element={
            <>
              <Header />
              <AboutUs />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact_us"
          element={
            <>
              <Header />
              <ContactUs />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="/product_detail/:id"
          element={
            <>
              <Header />
              <ProductDetail />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route path="/payhome" element={<PayHome />} />
        <Route path="/vnpay" element={<VNPay />} />
        <Route path="/cardpay" element={<CardPay />} />
        <Route
          path="/login_register"
          element={
            <>
              <Header />
              <LoginRegister />
              <ScrollToTop />

              <Footer />
            </>
          }
        />
        <Route
          path="/blog/blog-item"
          element={
            <>
              <Header />
              <BlogItem />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog/blog-error404"
          element={
            <>
              <Header />
              <BlogError404 />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Header />
              <Shop />
              <ScrollToTop />
              <Footer />
            </>
          }
        />
        <Route
          path="adminuser/:token/editUser/:id"
          element={
            <>
              <EditUser />
            </>
          }
        />
        <Route
          path="adminuser/:token/editOrder/:userId/:orderId"
          element={
            <>
              <EditOrder />
            </>
          }
        />
        <Route
          path="adminuser/:token/editProduct/:id"
          element={
            <>
              <EditProduct />
            </>
          }
        />
        <Route
          path="adminuser/:token/viewUser/:id"
          element={
            <>
              <UserView />
            </>
          }
        />
        <Route
          path="adminuser/:token/viewUserOders/:id"
          element={
            <>
              <OrderManagement />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
