import React, { useState } from "react";
import InputForBilling from "../Components/InputForBilling";
import ProductBilling from "../Components/ProductBilling";
import { styled } from "styled-components";
import TotalBill from "../Components/TotalBill";
import Cards from "../../Assets/Images/Cards.png";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const Input = styled.input`
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;
const LabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 20px;

  & button {
    margin: 0;
    background-color: var(--color-red-button);
    color: white;
    color: white;
    font-size: 16px;
    margin-top: 30px;
    width: 190px;
    height: 52px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
`;

const BillingDetails = () => {
  const [payment, setPayment] = useState("cash");

  const handlePayment = (e: any) => {
    setPayment(e.target.value);
  };

  return (
    <div style={{ marginLeft: "80px" }}>
      <h1>Billing Details</h1>
      <MainDiv>
        <div>
          <InputForBilling fieldName="First Name" />
          <InputForBilling fieldName="Company Name" />
          <InputForBilling fieldName="Street Address" />
          <InputForBilling fieldName="Apartment, floor, etc.(optional)" />
          <InputForBilling fieldName="Town/City" />
          <InputForBilling fieldName="Phone Number" />
          <InputForBilling fieldName="Email Address" />
        </div>
        <InfoDiv>
          <ProductBilling
            product={{
              Price: 500,
              Img: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
              Name: "computer",
              Quantity: 1,
            }}
          />
          <ProductBilling
            product={{
              Price: 500,
              Img: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
              Name: "computer",
              Quantity: 1,
            }}
          />
          <TotalBill />
          <LabelDiv>
            <label>
              <Input
                type="radio"
                checked={payment === "bank"}
                value="bank"
                onChange={handlePayment}
              />{" "}
              Bank
            </label>
            <img style={{ width: "100px", height: "30px" }} src={Cards} />
          </LabelDiv>
          <label>
            <Input
              type="radio"
              checked={payment === "cash"}
              value="cash"
              onChange={handlePayment}
            />{" "}
            Cash on Delivery
          </label>
          <button>Place Order</button>
        </InfoDiv>
      </MainDiv>
    </div>
  );
};

export default BillingDetails;
