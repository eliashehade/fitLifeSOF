import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayouts from "../Layout/LandingLayouts";
import Home from "../../pages/Home";
import RegisterForm from "../../pages/Register";
import Login from "../../pages/Login";
import AdminLogin from "../../pages/AdminLogin";
import Dashboard from "../../pages/AdminDashboard/Dashboard";
import ProtectedAdmin from "./ProtectedAdmin";
import Products from "../../pages/AdminDashboard/Products";
import AddProduct from "../../pages/AdminDashboard/AddProduct";
import AboutUs from "../../pages/AboutUs";
import Users from "../../pages/AdminDashboard/Users";
import ContactUs from "../../pages/Contact";
import Shop from "../../pages/Shop";
import Plans from "../../pages/Plans";
import BasicPlan from "../../pages/BasicPlan";
import Videos from "../../pages/Videos";
import ProtectedRoutes from "./ProtectedRoutes";
import Checkout from "../../pages/Checkout";
import Vipplan from "../../pages/VipPlan";
import Elplan from "../../pages/Elplan";
function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayouts component={Home} />} />
        <Route path="/contact-us" element={<LandingLayouts component={ContactUs} />} />
        <Route path="/about-us" element={<LandingLayouts component={AboutUs} />} />
        <Route path="/plans" element={<LandingLayouts component={Plans} />} />
        <Route path="/basicPlan" element={<ProtectedRoutes component={BasicPlan} />} />
        <Route path="/vipplan" element={<ProtectedRoutes component={Vipplan} />} />
        <Route path="/elplan" element={<ProtectedRoutes component={Elplan} />} />
        <Route path="/videos" element={<LandingLayouts component={Videos} />} />
        <Route path="/shop" element={<LandingLayouts component={Shop} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/checkout" element={<ProtectedRoutes component={Checkout} />} />
        <Route path="/admin/dashboard" element={<ProtectedAdmin component={Dashboard} />} />
        <Route path="/admin/dashboard/products" element={<ProtectedAdmin component={Products} />} />
        <Route path="/admin/dashboard/add-product" element={<ProtectedAdmin component={AddProduct} />} />
        <Route path="/admin/dashboard/users" element={<ProtectedAdmin component={Users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
