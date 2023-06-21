import React from "react";
import styled from "styled-components";
import logo from "../assets/Annotation 2023-06-17 103328.png";
import { Link, animateScroll as scroll } from "react-scroll";

const navbar = [
  { name: "About", active: false },
  { name: "Skills", active: false },
  { name: "works", active: false },
  { name: "Contact", active: false },
];

function Navbar() {
  return (
    <NavbarWrapper>
      <img src={logo} />
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
  width: 80%;
  div {
    display: flex;
    gap: 10px;
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
