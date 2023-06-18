import React from "react";

import styled from "styled-components";
import code from "../assets/Annotation 2023-06-17 093443.png";

const Home = () => {
  return (
    <HomeWrapper>
      <ImgWrapper>
        <img src={code} />
      </ImgWrapper>
      <div>
        <h5>Hi, Im</h5>
        <h1>Beqa Benidze</h1>
        <h4>Forntend developer</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem, doloribus facilis suscipit sequi voluptatibus debitis illum ratione natus voluptate temporibus! Cupiditate, deleniti quia aut id voluptate officia laudantium! Maxime.</p>
      </div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  position: relative;
  top: 40px;
  padding: 40px;
  display: flex;
  gap: 50px;
  background-color: yellow;
  width: 100%;
    img {
      background-color: green;
      border-radius: 10px;
      transform: skewY(10deg);
      background-color: red;
    }
    div{
      width: 50%;
    }
`;

const ImgWrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: #484872;
  transform: skewY(-10deg);
  position: relative;
  border-radius: 20px;
  display: grid;
  place-items: center;
`;
