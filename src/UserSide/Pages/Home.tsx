import React from "react";
import Header from "../Components/Header";
import { CategoryList } from "../Components/CategoryList";
import { styled } from "styled-components";
import Banner from "../Components/Banner";

const CategoryBannerDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
`;
const Home = () => {
  return (
    <div>
      <CategoryBannerDiv>
        <CategoryList />
        <Banner />
      </CategoryBannerDiv>
    </div>
  );
};

export default Home;
