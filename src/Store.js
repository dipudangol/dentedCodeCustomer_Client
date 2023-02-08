import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./pages/login/userSlice";
import productReducer from "./pages/dashboard/productSlice";
import categoryReducer from "./pages/dashboard/categorySlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer,
        admin: userReducer,
    },
});


export default store;

