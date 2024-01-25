import React from "react";
import { styled } from "styled-components";
import AboutPicture from "../../Assets/Images/AboutPicture.png";
import Statistics from "../../Assets/Images/Statistics.png";
import ValueProps from "../../Assets/Images/ValueProps.png";
import Employees from "../../Assets/Images/Employees.png";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .statistics {
    margin-top: 140px;
    margin-bottom: 140px;
  }

  & .employees {
    margin-bottom: 200px;
  }
  & .valueProps {
    margin-bottom: 140px;
  }
`;

const FirstDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 75px;
  margin-left: 135px;
  align-items: center;

  & div {
    & h1 {
      font-size: 54px;
      font-weight: bold;
      margin-bottom: 40px;
    }

    & p {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
`;

function About() {
  return (
    <MainDiv>
      <FirstDiv>
        <div>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <br />
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={AboutPicture} alt="africangirlsshopping" />
      </FirstDiv>
      <img className="statistics" src={Statistics} alt="statistics" />
      <img className="employees" src={Employees} alt="valueprops" />
      <img className="valueProps" src={ValueProps} alt="valueprops" />
    </MainDiv>
  );
}

export default About;
