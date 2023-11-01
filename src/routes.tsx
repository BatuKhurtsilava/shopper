import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminPage from "./Pages/AdminPage";
import AdminProductsByCategories from "./Pages/AdminProductsByCategories";
import AdminProdPage from "./Pages/AdminProdPage";
import AdminNavigation from "./Components/AdminNavigation";
import AdminAddProduct from "./Pages/AdminAddProduct";


export const routes: Object[] = [
  {element: <AdminNavigation />,
  path:'admin',
  children: [
{element: <AdminLoginPage />,
  index: true},
{element:<AdminPage />,
path: 'loggedin' },
{element:<AdminAddProduct />,
path: 'add-product' },
{element:<AdminProductsByCategories />,
path: 'category/:category'
 },
{element:<AdminProdPage />,
path: 'product/:_uuid' }
  ]}
]