import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const Laptops = ["Asus", "Dell", "HP", "Lenovo"];
const Mobiles = ["Apple", "OPPO", "Samsung"];
const SmartWatches = [
  "Amazfit",
  "Apple",
  "Aukey",
  "Canyon",
  "QCY",
  "Samsung",
  "Xiaomi",
];
const TVs = ["ColorView", "LG", "Philips", "Samsung", "Sony", "TCL", "TV"];
const Tabs = ["Apple", "Honor", "Lenovo", "Realme", "Samsung"];

const CategoryDiv = styled.div`
  padding-top: 30px;
  margin-left: 70px;
  border-right: 1px solid var(--color-black-border);

  & ul {
    list-style-type: none;

    & li {
      margin-top: 10px;
      font-size: 20px;
      display: flex;
      flex-direction: row;

      & a {
        color: var(--color-black);
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & .icon {
          margin-top: 5px;
          align-self: center;
          position: relative;
        }
      }

      &:hover a + ul {
        position: relative;
        width: max-content;
        justify-content: flex-start;
        border-radius: 20px;
        background-color: var(--color-black);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding-bottom: 5px;
        padding-right: 40px;
        gap: 10px;
        padding-left: 20px;
        overflow: visible;

        & li {
          font-size: 14px;

          & a {
            color: white;
          }
        }
      }

      & ul {
        display: none;
      }
    }
  }
`;

export const CategoryList = () => {
  return (
    <CategoryDiv>
      <ul>
        <li>
          <Link to={"#"}>
            <span>Laptops </span> <IoIosArrowForward className="icon" />
          </Link>{" "}
          <ul>
            {Laptops.map((prod) => (
              <li>
                <Link to={"#"}>{prod}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          {" "}
          <Link to={"#"}>
            <span>Mobiles </span> <IoIosArrowForward className="icon" />
          </Link>{" "}
          <ul>
            {Mobiles.map((prod) => (
              <li>
                <Link to={"#"}>{prod}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          {" "}
          <Link to={"#"}>
            <span>Smart Watches </span> <IoIosArrowForward className="icon" />
          </Link>{" "}
          <ul>
            {SmartWatches.map((prod) => (
              <li>
                <Link to={"#"}>{prod}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          {" "}
          <Link to={"#"}>
            <span>Tabs </span> <IoIosArrowForward className="icon" />
          </Link>{" "}
          <ul>
            {Tabs.map((prod) => (
              <li>
                <Link to={"#"}>{prod}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          {" "}
          <Link to={"#"}>
            <span>TVs </span> <IoIosArrowForward className="icon" />
          </Link>{" "}
          <ul>
            {TVs.map((prod) => (
              <li>
                <Link to={"#"}>{prod}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </CategoryDiv>
  );
};
