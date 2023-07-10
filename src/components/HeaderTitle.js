import React from "react";
import styled from "styled-components";

const HeaderTitleContainer = styled.section`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  letter-spacing: -1px;

  h1 {
    font-size: 48px;
    margin-bottom: 32px;
  }
  p {
    span {
      background-color: black;
      color: white;
      padding: 4px;
    }
  }
`;

export default function HeaderTitle() {
  return (
    <HeaderTitleContainer>
      <h1>JANE BLOGLIFE</h1>
      <p>
        Welcome to the blog of <span>Jane's world</span>
      </p>
    </HeaderTitleContainer>
  );
}
