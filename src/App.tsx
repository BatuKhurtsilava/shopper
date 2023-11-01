import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthorizationContextProvider } from "./AuthorizationContext";
import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminNavigation from "./Components/AdminNavigation";

function App() {
  return (
    <AuthorizationContextProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </AuthorizationContextProvider>
  );
}

export default App;
