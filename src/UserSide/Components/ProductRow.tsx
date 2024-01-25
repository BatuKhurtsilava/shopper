import React, { useState, useRef } from "react";
import { styled } from "styled-components";

const MainDiv = styled.div`
  
`;

const ProdDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 150px;
  margin-left: 80px;
  align-items: center;
  box-shadow: -1px 2px 5px -5px;
  & .price {
    margin-left: 35px;
  }

  & .total {
    margin-left: 50px;
  }

  & input {
    width: 35px;
    height: 25px;
    margin-left: 30px;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProductRow: React.FC<any> = ({ product }) => {
  const [inputQuantity, setInputQuantity] = useState(product.Quantity);
  const quantityRef = useRef<HTMLInputElement>(null);

  return (
    <MainDiv>
      <ProdDiv>
        <ProductDiv>
          <img style={{ width: "50px", height: "50px" }} src={product.Img} />
          <p>{product.Name}</p>
        </ProductDiv>
        <p className="price">{product.Price}</p>
        <input
          ref={quantityRef}
          type="number"
          value={inputQuantity}
          onChange={() => setInputQuantity(quantityRef.current!.value)}
        />

        <p className="total">{product.Price * inputQuantity}</p>
      </ProdDiv>
    </MainDiv>
  );
};

export default ProductRow;
