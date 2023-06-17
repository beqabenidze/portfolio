import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../assets/Annotation 2023-06-17 103328.png'

const navbar = [
  { name: "About", active: false },
  { name: "Skills", active: false },
  { name: "Honor", active: false },
  { name: "Certifications", active: false },
];


function Navbar() {
  return <NavbarWrapper>
    <img src={logo} />
    <div>
    {navbar.map((item) => {
    return(<Link to={`/${item.name}`} key = {Math.random()}>{item.name}</Link>)
  })}</div></NavbarWrapper>;
}

export default Navbar;

const NavbarWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
gap: 10px;
width: 90%;
background-color: transparent;
width: 100%;
div{
  display:flex;
  gap: 10px;
}
img{
  width: 20px;
  height: 20px;
}
a {
  text-decoration: none;
  color: inherit;
  transition: all 1s ease;
  &:hover {
    background-color: black;
    color: red;
  }
}
`;
