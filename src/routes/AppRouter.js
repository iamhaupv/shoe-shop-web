import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route index path="/home" element={<Home />} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
