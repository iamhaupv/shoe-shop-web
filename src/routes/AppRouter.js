import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/user/Signup";
import Signin from "../pages/user/Signin";
import View from "../pages/View";
import AdminManagerProduct from "../pages/admin/AdminAddProduct"
import AdminUpdateProduct from "../pages/admin/AdminUpdateProduct";
import AdminAddProduct from "../pages/admin/AdminAddProduct";
import LogninAdmin from "../pages/admin/LoginAdmin";
import RegisterAdmin from "../pages/admin/RegisterAdmin";
import Cart from "../pages/user/Cart";
import AdminManagerCategory from "../pages/admin/AdminManagerCategory";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<View />} />
        <Route
          path="/wp-admin/manager-product"
          element={<AdminManagerProduct />}
        />
        <Route path="/wp-admin/update-product" element={<AdminUpdateProduct />} />
        <Route path="/wp-admin/add-product" element={<AdminAddProduct />} />
        <Route path="/wp-admin" element={<LogninAdmin />} />
        <Route path="wp-admin-register" element={<RegisterAdmin/>} />
        <Route path="/my-cart" element={<Cart/>} />
        <Route path="/wp-amin/manager-categories" element={<AdminManagerCategory/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
