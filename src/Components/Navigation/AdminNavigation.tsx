import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthorizationContext } from "../../AuthorizationContext";
import styles from "./styles.module.css";
const AdminNavigation = () => {
  const { loggedin, setLoggedin } = useAuthorizationContext();

  return (
    <div>
      <nav className={styles.Container}>
        {loggedin === true && (
          <div className={styles.LinkContainer}>
            <Link className={styles.Link} to="/admin/loggedin">
              Main
            </Link>

            <Link className={styles.Link} to="/admin/add-product">
              New product
            </Link>
            <Link
              className={styles.Link}
              to="/admin"
              onClick={() => setLoggedin(null)}
            >
              Log out
            </Link>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default AdminNavigation;
