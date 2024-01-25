import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { json } from "stream/consumers";
import { useAuthorizationContext } from "../../../AuthorizationContext";
import AdminNavigation from "../../../Components/Navigation/AdminNavigation";
import styles from "./styles.module.css";
import { login } from "./ApiLogin";

interface IadminLoginPage {
  username: string;
  password: string;
}
const AdminLoginPage: React.FC = () => {
  const { setLoggedin, loggedin, response } = useAuthorizationContext();
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      userRef.current!.value === response?.items[0].username &&
      passwordRef.current!.value === response.items[0].password
    ) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  };

  useEffect(() => {
    if (loggedin) {
      navigate("/admin");
    }
  }, [loggedin]);

  return (
    <div className={styles.Container}>
      <form className={styles.Form} onSubmit={handleLogin}>
        <h3 className={styles.Header}>
          Welcome To Shopper's <br /> Admin Page{" "}
        </h3>
        <p className={styles.Text}>Username</p>
        <input className={styles.Input} ref={userRef} placeholder="Username" />
        <p className={styles.Text}>Password</p>
        <input
          className={styles.Input}
          type={"password"}
          ref={passwordRef}
          placeholder="Password"
        />
        <button className={styles.Button} type="submit">
          login
        </button>
      </form>
      {loggedin === false && <p>login or password is incorect</p>}
    </div>
  );
};

export default AdminLoginPage;
