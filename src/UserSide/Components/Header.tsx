import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const SaleDiv = styled.div`
  background-color: var(--color-black);
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & p {
    color: var(--color-white);
    word-spacing: 3px;
    justify-self: center;
    margin-right: 10px;
    padding-right: 40px;
  }

  & select {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: var(--color-white);
  }

  & option {
    background-color: none;
    color: var(--color-black);
  }
`;

const NavigationDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.9fr 1.4fr 1.2fr;
  margin-top: 25px;
  border-bottom: 1px solid var(--color-black-border);

  padding: 0;

  & h1 {
    justify-self: center;
    margin-right: 10px;
  }

  & div:last-child {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;

    & div {
      background-color: var(--color-white-dark);
      display: flex;
      height: 34px;
      width: 45%;
      border-radius: 8px;
      margin-right: 10px;
      padding-bottom: 3px;
      align-items: center;

      padding-left: 10px;
      & input {
        background: none;
        border: none;
      }
      & .icon {
        font-size: 25px;
      }
    }

    & .iconCart {
      font-size: 28px;
    }
  }
`;

const LinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 95px;
  gap: 30px;
  align-items: center;
  font-weight: bold;

  & a {
    color: var(--color-black);
    text-decoration: none;
    justify-self: center;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Header() {
  return (
    <div>
      <SaleDiv>
        <p>Winter Sale For Exclusive Products - OFF 50%!</p>
        <Link style={{ color: "white", fontWeight: "bold" }} to={"shopNow"}>
          ShopNow
        </Link>
        <select>
          <option value={"English"}>English</option>
          <option value={"Georgian"}>Georgian</option>
        </select>
      </SaleDiv>
      <NavigationDiv>
        <h1>Shopper</h1>
        <LinksDiv>
          <Link to={"home"}>Home</Link>
          <Link to={"contact"}>Contact</Link>
          <Link to={"about"}>About</Link>
          <Link to={"signUp"}>Sign Up</Link>
        </LinksDiv>
        <div>
          <div>
            <input type="text" placeholder="What are you looking for?" />
            <CiSearch className="icon" />
          </div>
          <AiOutlineShoppingCart className="iconCart" />
        </div>
      </NavigationDiv>
      <Outlet />
    </div>
  );
}
