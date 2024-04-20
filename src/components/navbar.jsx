import React from "react";
import styled from "styled-components";

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

  return (
    <NavbarWrapper style={navbarStyle}>
      <h2 style={{ cursor: "pointer" }}>CV</h2>

      <div>
        {navbar.map((item) => {
          return (
            <Link
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
  padding: 10px 100px;
  width: 80%;
  background-color: #393d39;
  border-radius: 10px;
  position: fixed;
  top: 10px;
  z-index: 3;
  div {
    display: flex;
    gap: 10px;

    :hover {
      background-color: #b2c0b2;
      transition: 0.5s;
      border-radius: 5px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  a {
    font-size: max(10px, 1vw);
    text-decoration: none;
    position: relative;
    padding: 10px;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: red;
      transition: height 1s;
      z-index: -1;
    }

    &:hover::before {
      height: 100%;
    }
  }
`;
