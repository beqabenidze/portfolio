import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const contacts = [
  {
    icon: BsFacebook,
    name: "@Beqa Benidze",
    link: "https://www.facebook.com/Benidzebeqa.1",
  },
  {
    icon: BsInstagram,
    name: "@ben1dzebeqa",
    link: "https://www.instagram.com/ben1dzebeqa/",
  },
  {
    icon: BsLinkedin,
    name: "@Beqa Benidze",
    link: "https://www.linkedin.com/in/beqa-benidze-78627b264/",
  },
  {
    icon: BsGithub,
    name: "@Beqa Benidze",
    link: "https://github.com/beqabenidze",
  },
  {
    icon: BsMailbox,
    name: "@beqabenidze9@gmail.com",
    link: "https://mail.google.com",
  },
  {
    icon: BsFillTelephoneFill,
    name: "+995 557-960-717",
  },
];

function Contact() {
  return (
    <ContactWrapper id="Contact">
      <h1>Contact</h1>
      <h5>Here's how you can reach me out</h5>
      <ContactSubWrapper>
        {contacts.map((item) => {
          return (
            <div key={Math.random()}>
              <a href={item.link} target="_blank">
                <item.icon />
                <span>{item.name}</span>
              </a>
            </div>
          );
        })}
      </ContactSubWrapper>
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

const ContactSubWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media only screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  div {
    border: 1px solid #b2c0b2;

    padding: 10px;
    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      text-decoration: none;
      color: black;
    }
  }
`;
