import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./pages/dashboard/productSlice";
import categoryReducer from "./pages/dashboard/categorySlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        category: categoryReducer,
    },
});


export default store;

