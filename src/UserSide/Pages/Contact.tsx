import React from "react";
import ContactInfo from "../../Assets/Images/ContactInfo.png";
import { styled } from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 140px;
  gap: 25px;
`;

const MessageDiv = styled.div`
  align-self: flex-start;
  padding-top: 50px;

  & textarea {
    background-color: var(--color-white-dark);
    width: 800px;
    height: 200px; /* Set a specific height for the textarea */
    margin-top: 32px;
    resize: none;
    padding: 10px; /* Add padding for better visual appearance */
    border: none; /* Remove default textarea border */
    border-radius: 8px;
  }

  & div {
    display: flex;
    flex-direction: row;
    gap: 16px;

    & input {
      width: 235px;
      height: 50px;
      background-color: var(--color-white-dark);
      border: none;
      border-radius: 8px;
      padding-left: 16px; /* Adjusted the placeholder padding */
    }
  }

  & span {
    color: red;
    position: relative;
    right: 160px;
    top: 10px;
  }
`;

function Contact() {
  return (
    <MainDiv>
      <img src={ContactInfo} alt="" />
      <MessageDiv>
        <form action="">
          <div>
            <input type="text" placeholder="Your Name" /> <span>*</span>
            <input type="text" placeholder="Your Email" /> <span>*</span>
            <input type="text" placeholder="Your Phone" /> <span>*</span>
          </div>
          <textarea
            rows={20}
            placeholder="This is a placeholder for long text. You can type multiple lines here."
          />
        </form>
      </MessageDiv>
    </MainDiv>
  );
}

export default Contact;
