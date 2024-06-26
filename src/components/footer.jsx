import React from "react";
import styled from "styled-components";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <FooterWrapper>
      <h3>
        Copyright <BiCopyright /> Beka Benidze. All rights reserved
      </h3>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  gap: 10px;
  width: 100%;
  padding: 20px;
  background-color: #393d39;
  h3 {
    text-align: center;
    font-weight: 400;
  }
`;
