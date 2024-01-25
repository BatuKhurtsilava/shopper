import AdminLoginPage from "./Pages/AdminPages/login/AdminLoginPage";
import AdminNavigation from "./Components/Navigation/AdminNavigation";
import Laptops from "./Pages/AdminPages/bycategories/Laptops";
import Mobiles from "./Pages/AdminPages/bycategories/Mobiles";
import Tabs from "./Pages/AdminPages/bycategories/Tabs";
import TVs from "./Pages/AdminPages/bycategories/TVs";
import Watches from "./Pages/AdminPages/bycategories/Watches";
import { CreateEditForm } from "./Pages/AdminPages/bycategories/Components/CreateEditForm";
import Main from "./UserSide/Pages/Main";
import Contact from "./UserSide/Pages/Contact";
import About from "./UserSide/Pages/About";
import SignUp from "./UserSide/Pages/SignUp";
import ShopNow from "./UserSide/Pages/ShopNow";
import Home from "./UserSide/Pages/Home";
export const routes: Object[] = [
  { element: <AdminLoginPage />, path: "admin-login" },
  {
    element: <AdminNavigation />,
    path: "admin",
    children: [
      { element: <Laptops />, path: "laptops" },
      { element: <Mobiles />, path: "mobiles" },
      { element: <Tabs />, path: "tabs" },
      { element: <TVs />, path: "tvs" },
      { element: <Watches />, path: "watches" },
      { element: <CreateEditForm />, path: "newProduct" },
    ],
  },
  {
    element: <Main />,
    path: "main",
    children: [
      { element: <Home />, index: "true" },
      { element: <Contact />, path: "contact" },
      { element: <About />, path: "about" },
      { element: <SignUp />, path: "signup" },
      { element: <ShopNow />, path: "shopNow" },
    ],
  },
];
