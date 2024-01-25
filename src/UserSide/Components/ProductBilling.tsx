import React from "react";
import { styled } from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SecondaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const ProductBilling: React.FC<any> = ({ product }) => {
  return (
    <MainDiv>
      <SecondaryDiv>
        <img
          style={{ width: "50px", height: "40px" }}
          src={product.Img}
          alt=""
        />
        <p>{product.Name}</p>
        <p>X{product.Quantity}</p>
      </SecondaryDiv>
      <p>Gel {product.Price}</p>
    </MainDiv>
  );
};

export default ProductBilling;
