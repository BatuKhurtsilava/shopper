import React, { useState } from "react";
import { styled } from "styled-components";


const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;

  & img {
    height: 600px;
    width: 500px;
    padding: 0;
    overflow: hidden;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  margin-left: 100px;
  margin-top: 70px;
  & img {
    width: 121px;
    height: 114px;
    cursor: pointer;
  }
`;

const FeaturesDiv = styled.div`
  & h2 {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
  }

  & h4 {
    margin: 0;
    margin-bottom: 5px;
    padding: 0;
  }

  & p {
    margin: 0;
    margin-bottom: 3px;
    padding: 0;
  }
`;

const CartDiv = styled.div`
  
  height: 40px;
  margin-top: 40px;
  

  & button {
    width: 40px;
    background-color: white;
    font-size: 30px;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
      background-color: var(--color-red-button);
      color: white;
    }
  }

  & p {
    width: 80px;
    border: 1px solid black;
    font-size: 32px;
    margin: 0px;
    text-align: center;
    padding-bottom: 8px;
  }

  & .CartBtn {
    margin-left: 40px;
    width: 200px;
    height: 40px;
    border: 3px solid black;
    border-radius: 5px;
    

    

    &:hover {
      background-color: var(--color-red-button);
      color: white;

  }
`;

;

const ProductPage: React.FC<any> = ({ product }) => {
  const excludeKeys = [
    "Id",
    "links-href",
    "Img1",
    "Img2",
    "Img3",
    "pages-href",
    "Stock",
    "Category",
    "Price",
  ];

  const ProdInfoArray = Object.entries(product);
  const filteredProduct = ProdInfoArray.filter(
    ([key]) => !excludeKeys.includes(key)
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(product.Img1);

  const increaseQuantity = () => {
    setQuantity((prev) => {
      if (prev < 10) {
        return prev + 1;
      }
      return prev;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div>
      <MainDiv>
        <ImgDiv>
          <img
            onClick={() => setSelectedImg(product.Img1)}
            src={product.Img1}
            alt=""
          />
          <img
            onClick={() => setSelectedImg(product.Img2)}
            src={product.Img2}
            alt=""
          />
          <img
            onClick={() => setSelectedImg(product.Img3)}
            src={product.Img3}
            alt=""
          />
        </ImgDiv>

        <img src={selectedImg} alt="" className="MainImg" />
        <FeaturesDiv>
          <h2>{product.Product}</h2>
          <h4>Gel: {product.Price}</h4>
          <div>
            {filteredProduct.map(([key, value]) => (
              <p>
                <span style={{ fontWeight: "bold" }}>{key}: </span>{" "}
                <span>{(value as string) || "N/A"}</span>
              </p>
            ))}
          </div>
          <div>
            <CartDiv style={{ display: "flex", flexDirection: "row" }}>
              <button onClick={decreaseQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>

              <button className="CartBtn">Add To Cart</button>
            </CartDiv>
          </div>
        </FeaturesDiv>
      </MainDiv>
    </div>
  );
};

export default ProductPage;
