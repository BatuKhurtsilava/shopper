import React from "react";
import InputForBilling from "../Components/InputForBilling";
import { styled } from "styled-components";

const MainDiv = styled.div`
  width: 435px;
  height: 630px;

  & p {
    padding: 0;
    margin-bottom: 5px;
    font-size: 16px;
    padding-bottom: 3px;
    color: black;
  }

  & input {
    background-color: #f5f5f5;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
  }

  & .cancel {
    margin-top: 24px;
    position: relative;
    left: 487px;
    color: black;
    background-color: white;
    border: none;
    font-size: 16px;
    font-weight: bold;
    height: 56px;

    cursor: pointer;
  }

  & .save {
    position: relative;
    margin-top: 24px;
    left: 500px;
    background-color: var(--color-red-button);
    color: var(--color-white-text);
    border: none;
    font-size: 16px;
    font-weight: bold;
    height: 56px;
    width: 180px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const MiniDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  & input {
    width: 330px;
  }
`;

const PasswordDiv = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    width: 700px;
    margin-bottom: 10px;
  }
`;

const EditProfile = () => {
  return (
    <MainDiv style={{ marginLeft: "80px" }}>
      <h2>Welcome User!</h2>
      <h1>Edit Your Profile</h1>
      <MiniDiv>
        <div>
          <p>First Name</p>
          <input placeholder="placeholder" />
        </div>
        <div>
          <p>Last Name</p>
          <input placeholder="placeholder" />
        </div>
      </MiniDiv>
      <MiniDiv>
        <div>
          <p>Email</p>
          <input placeholder="placeholder" />
        </div>
        <div>
          <p>Address</p>
          <input placeholder="placeholder" />
        </div>
      </MiniDiv>
      <PasswordDiv>
        <p>Password Changes</p>
        <input type="text" placeholder="Current Password" />
        <input type="text" placeholder="New Password" />
        <input type="text" placeholder="Confirm New Password" />
      </PasswordDiv>
      <button className="cancel">Cancel</button>
      <button className="save">Save Changes</button>
    </MainDiv>
  );
};

export default EditProfile;
