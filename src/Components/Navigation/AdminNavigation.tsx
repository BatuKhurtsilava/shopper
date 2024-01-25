import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthorizationContext } from "../../AuthorizationContext";
import styles from "./styles.module.css";
import LogoAdmin from "../../Assets/Images/LogoAdmin.png";
import { FaLaptop, FaMobileAlt, FaTabletAlt, FaTv } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "../../Pages/AdminPages/bycategories/Components/HomePage";
const AdminNavigation = () => {
  const { loggedin, setLoggedin } = useAuthorizationContext();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <div style={{ backgroundColor: "black", height: "50px" }}></div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <nav className={styles.Container}>
          {loggedin === true && (
            <div className={styles.NavContainer}>
              <button
                style={{ background: "none", border: "none" }}
                onClick={() => navigate("/admin")}
              >
                <img
                  className={styles.Image}
                  src={LogoAdmin}
                  alt="Logo Admin"
                />
              </button>
              <Link to={"laptops"}>
                <FaLaptop /> Laptops
              </Link>
              <Link to={"mobiles"}>
                <FaMobileAlt /> Mobiles{" "}
              </Link>
              <Link to={"tabs"}>
                {" "}
                <FaTabletAlt /> Tablets
              </Link>
              <Link to={"tvs"}>
                {" "}
                <FaTv /> TVs{" "}
              </Link>
              <Link to={"watches"}>
                {" "}
                <BsSmartwatch /> Smart Watches{" "}
              </Link>
              <Link className={styles.Link} to={"newProduct"}>
                <AiFillPlusCircle /> Create new Product
              </Link>
              <Link
                className={styles.Link}
                to="/admin-login"
                onClick={() => setLoggedin(null)}
              >
                Log out
              </Link>
            </div>
          )}
        </nav>
        {currentPath === "/admin" && <HomePage />}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminNavigation;
