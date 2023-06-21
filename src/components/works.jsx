import React from "react";
import styled from "styled-components";

function Works() {
  return (
    <WorkWrapper>
      <h1>Works</h1>
      <h5>List some of my projects here</h5>
    </WorkWrapper>
  );
}

export default Works;

const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media only screen and (min-width: 800px) {
  }
  h1 {
    margin: 20px;
  }
  h5 {
    margin: 0px 20px;
  }
`;
