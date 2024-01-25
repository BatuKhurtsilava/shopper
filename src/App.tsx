import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { routes } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthorizationContextProvider } from "./AuthorizationContext";
import AdminLoginPage from "./Pages/AdminPages/login/AdminLoginPage";
import AdminNavigation from "./Components/Navigation/AdminNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./Styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  const basename = process.env.PUBLIC_URL;
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthorizationContextProvider>
        <GlobalStyles />
        <RouterProvider router={createBrowserRouter(routes, { basename })} />
      </AuthorizationContextProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
