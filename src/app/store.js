import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
// import customerSlice from "../features/customer/customerSlice";
// import layoutSlice from "../features/layout/layoutSlice";
// import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    // layout: layoutSlice,
    // customer: customerSlice,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware);
  },
});
