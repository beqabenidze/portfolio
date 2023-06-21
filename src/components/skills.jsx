import React from "react";
import styled from "styled-components";
import javascript from "../assets/JavaScript-logo.png";
import react from "../assets/React-icon.svg.png";
import Styled from "../assets/styled-components.png";
import node from "../assets/node.png";
import sass from "../assets/sass.png";
import html from "../assets/html.jpg";
import css from "../assets/css.png";

const skills = [
  {
    name: "Javascript",
    src: javascript,
    k: "1 year",
  },
  {
    name: "React",
    src: react,
    k: "1 year",
  },
  {
    name: "Styled-components",
    src: Styled,
    k: "1 year",
  },
  {
    name: "NodeJs",
    src: node,
    k: "1 year",
  },
  {
    name: "Sass",
    src: sass,
    k: "1 year",
  },
  {
    name: "HTML",
    src: html,
    k: "1 year",
  },
  {
    name: "Css",
    src: css,
    k: "1 year",
  },
];

function Skills() {
  return (
    <SkillsWrapper>
      <h1>Skills</h1>
      <h5>Here are some of my skills</h5>
      <SkillsSubWrapper>
        {skills.map((item) => {
          return (
            <aside key={Math.random()}>
              <h2>{item.name}</h2>
              <img src={item.src}></img>
            </aside>
          );
        })}
      </SkillsSubWrapper>
    </SkillsWrapper>
  );
}

export default Skills;

const SkillsWrapper = styled.div`
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

const SkillsSubWrapper = styled.div`
  display: flex;
  max-width: 100vw;
  gap: 10vw;
  overflow-x: auto;
  padding: 20px;
  aside {
    min-width: 40vw;
    background-color: #b2c0b2;
    padding: 20px;
    display: grid;
    place-items: center;
    gap: 10px;
    border-radius: 5px;
    img {
      width: 120px;
      height: 120px;
    }
  }
`;
