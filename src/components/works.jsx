import React from "react";
import styled from "styled-components";
import kanban from "../assets/kanban.jpg";
import multi from "../assets/multi.png";
import entertainment from "../assets/entertainment.png";
import dev from "../assets/dev.png";
import calculator from "../assets/calculator.png";
import crowdfunding from "../assets/crowdfunding.png";
import designoPage from "../assets/designo page.png";
import designo from "../assets/designo.png";
import FAQ from "../assets/FAQ.png";
import tictoc from "../assets/tictoc.png";
import pricing from "../assets/pricing.png";
import dictionary from "../assets/dictionary.png";
import Promptopia from "../assets/promptopia.png";

const works = [
  {
    name: "Kanban",
    link: "https://beqabenidze.github.io/Kanban/",
    code: "https://github.com/beqabenidze/Kanban",
    img: kanban,
  },
  {
    name: "Promptopia",
    link: "https://promptopia-smoky-three.vercel.app/",
    code: "https://github.com/beqabenidze/promptopia",
    img: Promptopia,
  },
  {
    name: "Dictionary",
    link: "https://dictionary-seven-lime.vercel.app/",
    code: "https://github.com/beqabenidze/dictionary",
    img: dictionary,
  },
  {
    name: "multi-step-form",
    link: "https://beqabenidze.github.io/multi-step-form/select",
    code: "https://github.com/beqabenidze/multi-step-form",
    img: multi,
  },
  {
    name: "entertainment-web-app",
    link: "https://beqabenidze.github.io/Entertainment-web-app/",
    code: "https://github.com/beqabenidze/Entertainment-web-app",
    img: entertainment,
  },
  {
    name: "devJobs",
    link: "https://beqabenidze.github.io/DevJobs-web-app/",
    code: "https://github.com/beqabenidze/DevJobs-web-app",
    img: dev,
  },
  {
    name: "crowdfunding",
    link: "https://beqabenidze.github.io/Crowdfunding-product-page/",
    code: "https://github.com/beqabenidze/Crowdfunding-product-page",
    img: crowdfunding,
  },
  {
    name: "designoPage",
    link: "https://beqabenidze.github.io/designo-multi-page/",
    code: "https://github.com/beqabenidze/designo-multi-page",
    img: designoPage,
  },
  {
    name: "designo",
    link: "https://beqabenidze.github.io/Single-Page-Design-Portfolio/",
    code: "https://github.com/beqabenidze/Single-Page-Design-Portfolio",
    img: designo,
  },
  {
    name: "FAQ",
    link: "https://beqabenidze.github.io/FAQ-Accordiong/",
    code: "https://github.com/beqabenidze/FAQ-Accordiong",
    img: FAQ,
  },
  {
    name: "Tic-Tac-Toe",
    link: "lhttps://beqabenidze.github.io/DevJobs-web-app/ink",
    code: "https://github.com/beqabenidze/DevJobs-web-app",
    img: tictoc,
  },
  {
    name: "calculator",
    link: "https://beqabenidze.github.io/Tip-Calculator-app/",
    code: "https://github.com/beqabenidze/Tip-Calculator-app",
    img: calculator,
  },
  {
    name: "pricing component",
    link: "https://beqabenidze.github.io/interactive-pricing-component/",
    code: "https://github.com/beqabenidze/interactive-pricing-component",
    img: pricing,
  },
];

function Works() {
  return (
    <WorkWrapper id="works">
      <h1>Works</h1>
      <h4>List some of my projects here</h4>
      <WorkSubWrapper>
        {works.map((item) => {
          return (
            <div key={Math.random()}>
              <img src={item.img} />
              <h3>{item.name}</h3>
              <section>
                <a href={item.code} target="_blank">
                  View code
                </a>
                <a href={item.link} target="_blank">
                  View Live
                </a>
              </section>
            </div>
          );
        })}
      </WorkSubWrapper>
    </WorkWrapper>
  );
}

export default Works;

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  h1 {
    margin: 20px;
  }
  h4 {
    margin: 0px 20px;
    font-weight: 400;
  }
`;

const WorkSubWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media only screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  div {
    border: 1px solid #393d39;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: all 1s ease;
    &:hover {
      transform: scale(105%);
    }
    img {
      width: 100%;
      object-fit: contain;
    }
    h3 {
      margin: 20px 0;
      font-weight: 500;
    }
    section {
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 20px;
      @media only screen and (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
        flex-direction: row;
        width: 100%;
      }
      a {
        padding: 5px;
        background-color: #e3eee3;
        border-radius: 15px;
        transition: all 1s ease;
        cursor: pointer;
        text-decoration: none;
        color: black;

        @media only screen and (min-width: 800px) {
          grid-template-columns: 1fr 1fr 1fr;
          padding: max(8px, 1vw);
        }
        &:hover {
          background-color: #393d39;
          color: white;
          transition: all 1.5s ease;
        }
      }
    }
  }
`;
