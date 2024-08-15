import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./pages/Profile";
import { ProductProvider } from "./context/ProductContext";
import Details from "./pages/Details";
import AdminDashboard from "./Admin/AdminPages/AdminDashboard";
import AdminRoute from "./Admin/AdminRoute";
import UserRoutes from "./Admin/userRoutes";
import AdminProduct from "./Admin/AdminPages/AdminProduct";
import Cart from "./pages/Cart";
import AdminMainDashboard from "./Admin/AdminPages/AdminMainDashboard";

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<UserRoutes />} >
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="/about" element={<Aboutus />} />
              <Route path="/products" element={<Products />} />
              <Route path="/details/:productId" element={<Details />} />

              {/* Admin Dashboard */}
              <Route element={<AdminRoute />} >
                <Route path='/admin/dashboard' element={<AdminMainDashboard />} />
                <Route path='/admin/user' element={<AdminDashboard />} />
                <Route path='/admin/products' element={<AdminProduct />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}


export default App;
