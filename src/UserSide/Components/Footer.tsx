import React from "react";
import { styled } from "styled-components";
import { VscSend } from "react-icons/vsc";
import appStore from "../../Assets/Images/appStore.png";
import googlePlay from "../../Assets/Images/googlePlay.png";
import qr from "../../Assets/Images/qr.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { Link } from "react-router-dom";

const MainDiv = styled.div`
  padding-top: 40px;
  height: 440px;
  width: 100%;
  background-color: var(--color-black);
  color: white;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;

  & img {
    height: 25px;
    width: 25px;
  }

  & h2 {
    font-size: 24px;
    font-weight: bold;
  }

  & h3 {
    font-size: 20px;
    font-weight: normal;
  }

  & p {
    font-size: 16px;
  }

  & div {
    align-items: center;
  }
`;

const SendEmailDiv = styled.div`
  height: 36px;
  width: 190px;
  border: 2px solid var(--color-grey-inputBorder);
  display: flex;
  flex-direction: row;
  border-radius: 5px;

  & input {
    background: none;
    border: none;
    width: 150px;
    color: white;
  }

  & button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    padding-top: 2px;

    padding-right: 15px;
    coursor: pointer;
  }
`;

const AccountDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;

  & a {
    color: white;
    text-decoration: none;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const DawnloadDiv = styled.div`
height: 60px;
width: 150px;
display: grid;
grid-template-columns repeat(2, 1fr)
grid-template-rows repeat(2,1fr);
grid-row-gap: 10px;
grid-column-gap: 5px;

& .qr {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
  height: 76px;
  width: 75px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 10px;
  background: white;
  
  
}

& .googlePlay {
  grid-row: 1 / 2;
  grid-column: 2;
  padding: 0;
  margin: 0;
  border: none;
  coursor: pointer;
  width: 104px;
  height: 30px;
  padding-left: 5px;

}

& .appStore {
  grid-row: 2 / 4;
  grid-column: 2;
  padding: 0;
  margin: 0;
  border: none;
  width: 104px;
  height: 30px;
  coursor: pointer;
}

`;

const IconsDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  font-size: 24px;
  gap: 24px;
`;

const Footer = () => {
  return (
    <MainDiv>
      <div>
        <h2>Shopper</h2>
        <h3>Subscribe</h3>
        <p>Get 10% of your first order</p>
        <SendEmailDiv>
          <input placeholder="Enter your email"></input>
          <span>
            <button>
              <VscSend />
            </button>
          </span>
        </SendEmailDiv>
      </div>
      <div>
        <h3>Support</h3>
        <p>111 Tsotne Dadiani Street, Tbilisi, Georgia</p>
        <p>Shopper@gmail.com</p>
        <p>+995-555-888-999</p>
      </div>
      <AccountDiv>
        <h3>Account</h3>
        <Link to={"#"}>My Account</Link>
        <Link to={"#"}>Login / Register</Link>
        <Link to={"#"}>Cart</Link>
        <Link to={"#"}>Shop</Link>
      </AccountDiv>
      <AccountDiv>
        <h3>Quick Link</h3>
        <Link to={"#"}>Privacy Policy</Link>
        <Link to={"#"}>Terms Of Use</Link>
        <Link to={"#"}>FAQ</Link>
        <Link to={"#"}>Contact</Link>
      </AccountDiv>
      <div>
        <h3>Dawnload App</h3>
        <p style={{ color: "var(--color-white-text)" }}>
          Save $3 with App New User Only
        </p>
        <DawnloadDiv>
          <img className="qr" src={qr} alt="" />
          <img className="googlePlay" src={googlePlay} alt="" />
          <img className="appStore" src={appStore} alt="" />
        </DawnloadDiv>
        <IconsDiv>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <ImLinkedin2 />
        </IconsDiv>
      </div>
    </MainDiv>
  );
};

export default Footer;
