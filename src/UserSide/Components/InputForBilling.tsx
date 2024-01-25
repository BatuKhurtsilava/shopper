import React from "react";
import { styled } from "styled-components";

interface DivProps {
  placeholder: string;
}

const Div = styled.div<DivProps>`
  & p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    padding-bottom: 3px;
    color: ${({ placeholder }) =>
      placeholder ? "black" : "var(--color-grey-text)"};
  }

  & input {
    width: 400px;
    background-color: #f5f5f5;
    height: 40px;
    border: none;
    margin-bottom: 32px;
  }
`;
const InputForBilling: React.FC<any> = ({ fieldName, placeholder }) => {
  return (
    <Div placeholder={placeholder}>
      <p>
        {fieldName}{" "}
        {(fieldName === "Town/City" ||
          fieldName === "First Name" ||
          fieldName === "Street Address" ||
          fieldName === "Phone Number") && (
          <span style={{ color: "var(--color-red-button)" }}>*</span>
        )}
      </p>
      <input type="text" placeholder={placeholder} />
    </Div>
  );
};

export default InputForBilling;
