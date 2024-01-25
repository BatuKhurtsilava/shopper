import React from "react";
import { styled } from "styled-components";

const TotalBillDiv = styled.div<TotalBillProps>`
  display: flex;
  flex-direction: column;
  border: ${({ cart }) => (cart ? "3px solid grey" : "none")};
  width: ${({ cart }) => (cart ? "450px" : "300px")};
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: ${({ cart }) => (cart ? "3px 3px 10px" : "")};
  padding-left: 15px;

  & button {
    margin: 0;
    background-color: var(--color-red-button);
    color: white;
    margin-left: 120px;
    margin-bottom: 30px;
  }

  & .btn {
  }

  & p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: ${({ cart }) => (cart ? "40px" : "6px")};
    padding-bottom: ${({ cart }) => (cart ? "10px" : "2px")};
    margin-right: ${({ cart }) => (cart ? "30px" : "")};

    & span {
      align-self: flex-start;
    }
  }

  & .pe {
    border-bottom: ${({ cart }) =>
      cart ? "2px solid grey" : "1px solid grey"};
  }
`;
interface TotalBillProps {
  cart?: any;
}
const TotalBill: React.FC<TotalBillProps> = ({ cart }) => {
  return (
    <TotalBillDiv cart={cart}>
      {cart && <h3>Cart Total</h3>}
      <p className="pe">
        Subtotal:<span>Gel 1000</span>
      </p>
      <p className="pe">
        Shipping:<span style={{ paddingRight: "30px" }}>Free</span>
      </p>
      <p>
        Total:<span>Gel 1000</span>
      </p>
      {cart && <button className="btn">Procees to checkout</button>}
    </TotalBillDiv>
  );
};

export default TotalBill;
