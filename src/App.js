import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Category } from './pages/category/Category';
import { ProductByCategory } from './pages/productByCategory/ProductByCategory';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:slug" element={<ProductByCategory />} />
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
