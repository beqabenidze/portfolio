import React from "react";
import styled from "styled-components";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Navbar from "./navbar";
import Skills from "./skills";
import Works from "./works";

const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 100%;
`;
