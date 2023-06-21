import React from "react";
import { styled } from "styled-components";
import code from "../assets/me.png";

const About = () => {
  return (
    <AboutWrapper id="About">
      <ImgWrapper>
        <img src={code} />
      </ImgWrapper>
      <div>
        <h5>Hi, Im</h5>
        <h1>Beqa Benidze</h1>
        <h4>Forntend developer</h4>
        <p>
          Passionate self-learning developer with expertise in JavaScript, React
          and other frameworks. Dedicated to continuous growth, problem-solving,
          and creating exceptional user experiences. Always exploring new
          technologies and eager to make a positive impact in the world of
          software development.
        </p>
      </div>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    text-align: initial;
    padding: 20px;
  }
  div {
    align-self: center;
    max-width: 600px;
    @media only screen and (min-width: 800px) {
      max-width: none;
    }
  }
  img {
    width: 370px;
    border-radius: 10px;
    transform: skewY(10deg);
  }
  div {
    width: 50%;
    @media only screen and (max-width: 800px) {
      width: auto;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 500px;
  height: 250px;
  background-color: #b2c0b2;
  transform: skewY(-10deg);
  position: relative;
  border-radius: 20px;
  display: grid;
  place-items: center;
`;
