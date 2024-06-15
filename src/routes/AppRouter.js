import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/user/Signup";
import Signin from "../pages/user/Signin";
import View from "../pages/View";
import AdminManagerProduct from "../pages/admin/AdminManagerProduct";
import AdminUpdateProduct from "../pages/admin/AdminUpdateProduct";
import AdminAddProduct from "../pages/admin/AdminAddProduct";
import LogninAdmin from "../pages/admin/LoginAdmin";
import RegisterAdmin from "../pages/admin/RegisterAdmin";
import Cart from "../pages/user/Cart";
import AdminManagerCategory from "../pages/admin/AdminManagerCategory";
import AdminAddCategory from "../pages/admin/AdminAddCategory";
import AdminUpdateCategory from "../pages/admin/AdminUpdateCategory";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* vl */}
        <Route path="/view" element={<View />} />
        {/* user */}
        <Route index path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-cart" element={<Cart />} />
        {/* admin product */}
        <Route
          path="/wp-admin/products/manager-products"
          element={<AdminManagerProduct />}
        />
        <Route
          path="/wp-admin/products/update-product"
          element={<AdminUpdateProduct />}
        />
        <Route path="/wp-admin/products/add-product" element={<AdminAddProduct />} />
        <Route path="/wp-admin" element={<LogninAdmin />} />
        <Route path="wp-admin-register" element={<RegisterAdmin />} />
        {/* admin category */}
        <Route
          path="/wp-admin/categories/manager-categories"
          element={<AdminManagerCategory />}
        />
        <Route
          path="/wp-admin/categories/add-category"
          element={<AdminAddCategory />}
        />
        <Route
          path="/wp-admin/categories/update-category"
          element={<AdminUpdateCategory />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
