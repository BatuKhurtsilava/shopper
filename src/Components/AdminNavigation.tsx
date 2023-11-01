import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthorizationContext } from "../AuthorizationContext";

const AdminNavigation = () => {
  const { loggedin, setLoggedin } = useAuthorizationContext();

  return (
    <div>
      <nav>
        {loggedin === true && (
          <div>
            <Link to="/admin" onClick={() => setLoggedin(null)}>
              Log out
            </Link>
            <Link to="/admin/add-product">new product</Link>
            <Link to="/admin/loggedin">Main</Link>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminNavigation;
