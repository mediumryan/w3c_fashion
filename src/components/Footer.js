import React from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: grey;
  color: white;
  padding: 48px 24px;
  * {
    font-size: 18px;
  }
  button {
    display: flex;
    align-items: center;
    background-color: black;
    padding: 12px;
    margin-bottom: 24px;
    &:hover {
      color: black;
      background-color: #aaa;
    }
    span {
      margin-left: 12px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <button>
        <a href="#header" style={{ color: "white", textDecoration: "none" }}>
          <FaArrowUp /> <span>To the Top</span>
        </a>
      </button>
      <p>
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="blank"
          style={{ color: "white" }}
        >
          w3.css
        </a>
      </p>
    </FooterContainer>
  );
}
