import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Category } from './pages/category/Category';
import LoginPage from './pages/login/Login';
import UserRegistration from './pages/user-registration/UserRegistration';
import { ProductByCategory } from './pages/productByCategory/ProductByCategory';
import { ProductDetail } from './pages/product-detail/ProductDetail';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:_id" element={<ProductByCategory />} />
          <Route path="/product/:_id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>


      <ToastContainer position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
