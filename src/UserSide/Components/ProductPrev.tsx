import React, { useState } from "react";
import { styled } from "styled-components";

interface BtnProps {
  mouseOnImage: boolean;
}

const ProdDiv = styled.div<BtnProps>`
  height: 350px;
  width: 270px;
  margin: 0;
  padding: 0;
  position: relative;

  & img {
    height: 250px;
    width: 270px;
  }

  & .name {
    font-size: 16px;
    color: black;
  }

  & .price {
    color: var(--color-red-button);
  }

  & .cartBtn {
    position: absolute;
    bottom: 100px;
    left: 0;
    background-color: black;
    color: white;
    width: 270px;
    height: 41px;
    display: ${(props) => (props.mouseOnImage ? "block" : "none")};
    pointer-events: none;
  }
`;

const ProductPrev: React.FC<any> = ({ product }) => {
  const [mouseOnImage, setMouseOnImage] = useState(false);

  return (
    <ProdDiv mouseOnImage={mouseOnImage}>
      <img
        onMouseLeave={() => setMouseOnImage(false)}
        onMouseEnter={() => setMouseOnImage(true)}
        src={product.Img1}
      ></img>
      <button className="cartBtn">Add To Cart</button>
      <p className="name">{product.Product}</p>
      <p className="price">{product.Price}</p>
    </ProdDiv>
  );
};

export default ProductPrev;
