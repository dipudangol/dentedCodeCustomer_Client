import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Dashboard } from './pages/dashboard/Dashboard';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Dashboard />} />s
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
