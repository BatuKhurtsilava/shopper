import React from "react";
import { styled } from "styled-components";
import ProductRow from "../Components/ProductRow";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import TotalBill from "../Components/TotalBill";

const MainDiv = styled.div`
  & button {
    background-color: white;
    width: 150px;
    height: 40px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0.5px 1px 3px;
    margin-top: 40px;
    margin-left: 80px;
    margin-bottom: 30px;
    &:hover {
      background-color: var(--color-red-button);
      color: white;
    }
  }
`;



const TableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 80px;
  padding-left: 20px;
  padding-right: 100px;
  margin-bottom: 30px;
  box-shadow: -1px 2px 5px -5px;
`;

const ValuePropDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 90px;
  border: 1px solid black;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    & h5,
    p {
      padding: 0;
      margin: 0;
      margin-left: 20px;
    }
  }

  & .icon {
    font-size: 40px;
  }
`;
const CartPage = () => {
  return (
    <MainDiv>
      <TableDiv>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>SubTotal</p>
      </TableDiv>
      <ProductRow
        product={{
          Price: 500,
          Img: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
          Name: "computer",
          Quantity: 1,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "300px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            marginLeft: "80px",
          }}
        >
          <ValuePropDiv>
            <TbTruckDelivery className="icon" />
            <div>
              <h5>Free Delivery</h5>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </ValuePropDiv>
          <ValuePropDiv>
            <GiReturnArrow className="icon" />
            <div>
              <h5>Return Delivery</h5>
              <p>Free 30 Days Delivery Returns</p>
            </div>
          </ValuePropDiv>
        </div>
        <TotalBill cart= {true} />
      </div>
      <button>Back to Shop</button>
    </MainDiv>
  );
};

export default CartPage;
