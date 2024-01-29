
import AppleBanner from "../../Assets/Images/AppleBanner.jpeg";
import LenovoBanner from "../../Assets/Images/LenovoBanner.jpg";
import SamsungBanner from "../../Assets/Images/SamsungBanner.jpg";
import { useState } from "react";
import { IoIosRadioButtonOn } from "react-icons/io";
import { styled } from "styled-components";

interface ImagesContainerProps {
  activeIndex: number;
}

interface ButtonProps {
  active: boolean;
}

const ImageCarousel = styled.div`
  overflow: hidden;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
  margin-top: 30px;

  & .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    position: absolute;
    top: 450px;
    left: 800px;
    }
  }
`;
const ImagesContainer = styled.div<ImagesContainerProps>`
  white-space: nowrap;
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transform: translateX(-${(props) => props.activeIndex * 100}%);

  & img {
    width: 800px;
    height: 300px;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.active ? "var(--color-orange-icon)" : "var(--color-grey-icon)"};
`;

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const bannerImages = [AppleBanner, LenovoBanner, SamsungBanner];
  const buttons = [1, 2, 3];

  return (
    <ImageCarousel>
      <ImagesContainer activeIndex={activeIndex}>
        {bannerImages.map((img, i) => (
          <img src={img} alt='imagedigital'></img>
        ))}
      </ImagesContainer>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <div key={i}>
            <StyledButton
              className="button"
              key={i}
              active={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            >
              <IoIosRadioButtonOn />
            </StyledButton>
          </div>
        ))}
      </div>
    </ImageCarousel>
  );
};

export default Banner;
