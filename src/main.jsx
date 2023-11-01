import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyProject from "./pages/MyProject.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import PrivateRoute from "./routes/PrivateRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/identify-illegal-timber" element={<MyProject />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
