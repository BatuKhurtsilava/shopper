import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginPageImg from "../../Assets/Images/LoginPageImg.jpg";
import { styled } from "styled-components";

const MainDiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 129px;

  & .image {
    width: 805px;
    height: 781px;
  }

  & div {
    justify-self: flex-end;
    align-self: flex-start;

    display: flex;
    flex-direction: column;

    & h1 {
      margin-top: 50px;
      margin-bottom: 10px;
      letter-spacing: 2px;
      font-size: 36px;
    }

    & h6 {
      margin: 0;
      padding: 0;
      margin-bottom: 48px;
      font-size: 16px;
    }

    & input {
      border: none;
      border-bottom: 2px solid var(--color-grey-inputBorder);
      margin-bottom: 40px;
      padding: 10px;
      padding-left: 3px;
    }

    & .loginButton {
      background: var(--color-red-button);
      color: var(--color-white);
      height: 50px;
      margin-top: 30px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
    }

    & .forgetButton {
      height: 50px;
      background-color: white;
      border-radius: 5px;
      padding-bottom: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      margin-bottom: 32px;

      

    & p {
      & a {
        color: var(--color-black);
        padding-left: 10px;
        padding-bottom: 4px;
      }
    }
  }
`;

const SignIn = () => {
  return (
    <MainDiv>
      <img className="image" src={LoginPageImg} alt="LgnPgImg" />
      <div>
        <h1>Create an account</h1>
        <h6>Enter your details below</h6>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="text" />
        <button className="loginButton">Sign in</button>
        <button className="forgetButton">Forget your account?</button>
      </div>
    </MainDiv>
  );
};

export default SignIn;
