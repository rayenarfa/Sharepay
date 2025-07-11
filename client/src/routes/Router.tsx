import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth, db } from "../config/firebase/firebaseConfig";
import { onSnapshot, doc } from "firebase/firestore";
import { toast } from "sonner";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { CartProvider } from "../context/CartContext";
import NotFound from "../pages/errors/ErrorPage";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import CompleteProfile from "../pages/auth/CompleteProfile";
import Profile from "../pages/user/Profile";
import Cart from "../pages/user/Cart";
import Orders from "../pages/user/Orders";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProductsDashboard from "../pages/admin/Products";
import UsersDashboard from "../pages/admin/Users";
import AdminOrders from "../pages/admin/Orders";
import ProductDetail from "../pages/products/ProductDetail";
import Categories from "../pages/products/Categories";
import Checkout from "../pages/user/Checkout";
import OrderConfirmation from "../pages/user/OrderConfirmation";

import AccountBlocked from "../pages/auth/AccountBlocked";
import Contact from "../pages/info/Contact";
import About from "../pages/info/About";
import { Toaster } from "sonner";

// Email service has been migrated to Nodemailer

/**
 * Main Router component that:
 * 1. Sets up application routes
 * 2. Initializes services
 * 3. Manages auth state and protected routes
 * 4. Handles account blocking detection
 */
const Router = () => {
  const [initializing, setInitializing] = useState(true);

  /**
   * Initializes services and handles application setup
   */
  useEffect(() => {
    const initializeServices = async () => {
      try {
        // Services initialization code would go here
        console.log("App services initialized");
      } catch (error) {
        console.error("Failed to initialize services:", error);
      } finally {
        setInitializing(false);
      }
    };

    initializeServices();
  }, []);

  /**
   * Sets up a realtime listener to detect if a logged-in user gets blocked
   * Automatically logs out blocked users and redirects them to the blocked account page
   */
  useEffect(() => {
    const setupAuthListener = async () => {
      const unsubscribeAuth = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            // Set up a listener on the user document
            const userRef = doc(db, "users", user.uid);
            const unsubscribeDoc = onSnapshot(userRef, (docSnapshot) => {
              if (docSnapshot.exists() && docSnapshot.data().isBlocked) {
                // User is blocked, sign them out and redirect to blocked page
                auth.signOut().then(() => {
                  toast.error(
                    `Your account has been suspended. Please contact us at ${import.meta.env.VITE_EMAIL_USER} to appeal.`,
                    { duration: 6000 }
                  );
                  window.location.href = "/account-blocked";
                });
              }
            });

            // Return cleanup function
            return () => unsubscribeDoc();
          } catch (error) {
            console.error("Error setting up user document listener:", error);
          }
        }
      });

      // Clean up auth listener on component unmount
      return () => unsubscribeAuth();
    };

    setupAuthListener();
  }, []);

  // Show loading state while initializing services
  if (initializing) {
    return <div>Loading application...</div>;
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account-blocked" element={<AccountBlocked />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute roleRequired="user">
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route
            path="/orders"
            element={
              <ProtectedRoute roleRequired="user">
                <Orders />
              </ProtectedRoute>
            }
          />
          {/* Admin Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute roleRequired="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute roleRequired="admin">
                <ProductsDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute roleRequired="admin">
                <UsersDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute roleRequired="admin">
                <AdminOrders />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Router;
