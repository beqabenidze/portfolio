import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <ContactWrapper>
      <h1>Contact</h1>
      <h5>Here is how you can reach me out</h5>
    </ContactWrapper>
  );
}

export default Contact;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  h1 {
    margin: 20px;
  }
  h5 {
    margin: 0px 20px;
  }
`;
