import { Route, Routes, useLocation } from "react-router";
import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HomeLayout from "./layout/HomeLayout";
import HomeIndex from "./pages/frontEnd/home/Index";

import Checkout from "./component/checkout/Index";
import ProductDetails from "./component/ProductDetails/Index";
import CartPage from "./component/cartPage/CartPage";
import Contact from "./component/contact/Index";
import ProductList from "./component/productList/Index";
import BestCollection from "./component/bestCollection/Index";
import RegisterForm from "./component/registerForm/Index";
import LoginPage from "./component/LoginPage/Index";
import PrivateRoute from './pages/auth/Private';
import DashboardLayout from './layout/DashboardLayout';
import DashboardHome from './pages/dashboard/home/Index';
import ProductIndex from './pages/dashboard/product/Index';
import UserTable from './pages/dashboard/users/Index';
import UpDateProduct from './pages/dashboard/product/UpDateProduct';
import CreateProduct from './pages/dashboard/product/AddProduct';
import Admin from "./pages/dashboard/adminProfilePage/Index";
import Profile from "./component/Profile/Index";
import Hero from "./component/HeroSection/Hero";

export default function App() {
  const location = useLocation(); // Hook to get the current route location

  return (
    <Suspense
      fallback={
        <div className="flex items-center mx-auto justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    >
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<LoginPage />} />

          {/* Public Routes */}
          <Route path="/" element={<HomeLayout />}>
            <Route
              index
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <HomeIndex />
                </motion.div>
              }
            />
            <Route
              path="/checkout"
              element={
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Checkout />
                </motion.div>
              }
            />
            <Route
              path="/productDetails/:id"
              element={
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <ProductDetails />
                </motion.div>
              }
            />
            <Route
              path="/cartPage"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <CartPage />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/productList"
              element={
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <ProductList />
                </motion.div>
              }
            />
            <Route
              path="/bestCollection"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <BestCollection />
                </motion.div>
              }
            />
            <Route
              path="/registerForm"
              element={
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <RegisterForm />
                </motion.div>
              }
            />
            <Route
              path="/profile"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Profile />
                </motion.div>
              }
            />
            <Route
              path="/Hero"
              element={
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Hero />
                </motion.div>
              }
            />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="product" element={<ProductIndex />} />
              <Route path="UserTable" element={<UserTable />} />
              <Route path="product/create" element={<CreateProduct />} />
              <Route path="product/updateproduct/:id" element={<UpDateProduct />} />
              <Route path="admin" element={<Admin />} />
            </Route>
          </Route>

          {/* Catch-all Route for Errors */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
