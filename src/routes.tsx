import AdminLoginPage from "./Pages/AdminPages/login/AdminLoginPage";
import AdminPage from "./Pages/AdminPages/mainpage/AdminPage";
import AdminProductsByCategories from "./Pages/AdminPages/bycategories/AdminProductsByCategories";
import AdminProdPage from "./Pages/AdminPages/product/AdminProdPage";
import AdminNavigation from "./Components/Navigation/AdminNavigation";
import AdminAddProduct from "./Pages/AdminPages/addProduct/AdminAddProduct";

export const routes: Object[] = [
  {
    element: <AdminNavigation />,
    path: "admin",
    children: [
      { element: <AdminLoginPage />, index: true },
      { element: <AdminPage />, path: "loggedin" },
      { element: <AdminAddProduct />, path: "add-product" },
      { element: <AdminProductsByCategories />, path: "category/:category" },
      { element: <AdminProdPage />, path: "product/:_uuid" },
    ],
  },
];
