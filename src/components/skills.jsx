import React from "react";
import styled from "styled-components";
import javascript from "../assets/JavaScript-logo.png";
import react from "../assets/React-icon.svg.png";
import Styled from "../assets/styled-components.png";
import node from "../assets/node.png";
import sass from "../assets/sass.png";
import html from "../assets/html.jpg";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";

const skills = [
  {
    name: "Javascript",
    src: javascript,
    info: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
  {
    name: "React",
    src: react,
    info: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
  },
  {
    name: "Styled-components",
    src: Styled,
    info: "Styled-components is a library that allows you to write CSS in JS while building custom components in Reactjs .",
  },
  {
    name: "NodeJs",
    src: node,
    info: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more.",
  },
  {
    name: "Sass",
    src: sass,
    info: "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself.",
  },
  {
    name: "HTML",
    src: html,
    info: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    name: "Css",
    src: css,
    info: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    name: "Figma",
    src: figma,
    info: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
  },
  {
    name: "Git",
    src: git,
    info: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively.",
  },
];

function Skills() {
  return (
    <SkillsWrapper id="Skills">
      <h1>Skills</h1>
      <h5>Here are some of my skills</h5>
      <SkillsSubWrapper>
        {skills.map((item) => {
          return (
            <aside key={Math.random()}>
              <h2>{item.name}</h2>
              <img src={item.src}></img>
              <p>{item.info}</p>
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
    overflow: hidden;
    position: relative;
    img {
      width: 120px;
      height: 120px;
      position: relative;
      transition: all 1s ease;
    }
    p {
      position: absolute;
      right: -500px;
      top: 60px;
      transition: all 1s ease;
      max-width: 240px;
    }
    @media only screen and (min-width: 800px) {
      &:hover {
        img {
          transform: translateX(-100%);
        }
        p {
          right: 4%;
        }
      }
    }
  }
`;
