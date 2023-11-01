import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { json } from "stream/consumers";
import { useAuthorizationContext } from "../AuthorizationContext";
import AdminNavigation from "../Components/AdminNavigation";

interface IadminLoginPage {
  username: string;
  password: string;
}
const AdminLoginPage: React.FC = () => {
  const adminCreds: IadminLoginPage = {
    username: "administrator",
    password: "adminadmin",
  };

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
      navigate("/admin/loggedin");
    }
  }, [loggedin, navigate]);

  console.log(loggedin);
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input ref={userRef} placeholder="Username" />
        <input type={"password"} ref={passwordRef} placeholder="Password" />
        <button type="submit">login</button>
      </form>
      {loggedin === false && <p>login or password is incorect</p>}
    </div>
  );
};

export default AdminLoginPage;
