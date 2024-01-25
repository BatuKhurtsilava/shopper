import React, { useState } from "react";
import ProductPrev from "./ProductPrev";
import { styled } from "styled-components";

interface ImagesContainerProps {
  activeIndex: number;
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const CarouselDiv = styled.div<ImagesContainerProps>`
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  gap: 30px;
  transform: translateX(-${(props) => props.activeIndex * 330}px);
`;

const ProductCarousel = () => {
  const prods = [
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
    {
      Id: "1699348403-122",
      Product: "Apple iPhone 14 Pro Max 1TB Space Black",
      Img1: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1a_sh06-i2_kue3-c1_dn18-dc.jpg",
      Img2: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-1b_r3y5-bt_o3rh-86_oykw-6v.jpg",
      Img3: "https://alta.ge/images/detailed/259/WWEN_iPhone14ProMax_Q422_Space-Black_PDP-IMAGES_Position-2_4b4x-rl_411s-sf_4n55-ns.jpg",
      Price: 6299,
      Brand: "Apple",
      Model: "iPhone 14 Pro Max",
      Diagonal: '6.7"',
      Resolution: "1290 x 2796",
      Camera_quantity: 4,
      "Main Camera Pixels":
        "48 MP, f/1.8, 24mm (wide), 1.22µm, dual pixel PDAF, sensor-shift OIS",
      "Secondary Camera Pixels":
        "12 MP, f/2.8, 77მმ (ტელეფოტოგრაფია), PDAF, OIS, 3x ოპტიკური მასშტაბირება",
      Chipset: "Apple A16 Bionic",
      RAM: "6144 MB",
      Memory: "1000 GB",
      Color: "Space Black",
      Sizes: "77.6 x 160.7 x 7.9 mm",
      Weight: "240 g",
      Warranty: "24 Months",
      Sale: null,
      Stock: 100,
      Category: "Mobiles",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const increaseActiveIndex = function () {
    console.log(activeIndex);
    if (activeIndex * 2 === prods.length) {
      return;
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const decreaseActiveIndex = function () {
    console.log(activeIndex);
    if (activeIndex === 0) {
      return;
    }
    {
      setActiveIndex((prev) => prev - 1);
    }
  };
  return (
    <MainDiv>
      <button onClick={decreaseActiveIndex}>prev</button>
      <button onClick={increaseActiveIndex}>next</button>
      <CarouselDiv activeIndex={activeIndex}>
        {prods.map((product) => (
          <ProductPrev product={product} />
        ))}
      </CarouselDiv>
    </MainDiv>
  );
};

export default ProductCarousel;
