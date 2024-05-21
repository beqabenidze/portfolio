import React from "react";
import styled from "styled-components";
import CV from "../assets/Beka Benidze.pdf";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

const navbar = [
  { name: "About", active: false },
  { name: "Skills", active: false },
  { name: "works", active: false },
  { name: "Contact", active: false },
];

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const navbarStyle = {
    backgroundColor: `rgba(57, 61, 57, ${scrollY >= 20 ? "2.2" : "0"})`,
    border: `1px solid ${scrollY >= 20 ? "white" : "transparent"}`,
    transition: "all 1.7s ease",
  };
  const link = {
    backgroundColor: scrollY >= 20 ? "" : "transparent",
    color: scrollY >= 20 ? "white" : "#393d39",
    transition: "all 1.2s ease",
  };
  return (
    <NavbarWrapper style={navbarStyle}>
      <a href={CV} target="_blank" style={link}>
        CV
      </a>
      <div>
        {navbar.map((item) => {
          return (
            <Link
              style={link}
              to={item.name}
              smooth={true}
              duration={1800}
              key={Math.random()}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 90px;
  width: 80%;
  background-color: #393d39;
  border-radius: 10px;
  position: fixed;
  top: 10px;
  z-index: 3;
  @media only screen and (max-width: 800px) {
    padding: 10px;
  }
  div {
    display: flex;
    gap: 20px;
    :hover {
      color: white;
      background-color: #393d39;
      transition: all 1.2s ease;
    }
    @media only screen and (max-width: 800px) {
      gap: 1px;
    }
  }
  a {
    font-size: max(18px, 1vw);
    text-decoration: none;
    position: relative;
    padding: 10px 30px;
    background-color: transparent;
    cursor: pointer;
    font-weight: 600;
    @media only screen and (max-width: 800px) {
      padding: 10px;
      font-size: max(14px, 1vw);
    }
    &:hover {
      background-color: #393d39;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      background-color: white;
      transition: all 1.2s ease;
      z-index: -1;
    }
    &:hover::before {
      height: 100%;
      width: 100%;
      left: 0;
      border-radius: 80px;
    }
  }
`;
