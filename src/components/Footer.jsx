import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: var(--bg-200);
    color: var(--text-100);
    padding: var(--padding-very-large) var(--padding-large);
    * {
        font-size: var(--font-size-micro);
    }
`;

const GoTop = styled.button`
    display: flex;
    align-items: center;
    background-color: var(--primary-200);
    padding: var(--padding-medium);
    margin-bottom: var(--margin-medium-large);
    transition: 500ms all;
    a {
        text-decoration: none;
        color: var(--primary-300);
        display: flex;
        align-items: center;
    }
    span {
        margin-left: var(--margin-medium);
    }
    &:hover {
        transform: scale(1.15);
    }
`;

const Powered = styled.div`
    a {
        color: var(--primary-200);
        margin-left: var(--margin-small);
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <GoTop>
                <a href="#header_title">
                    <FaArrowUp /> <span>To the Top</span>
                </a>
            </GoTop>
            <Powered>
                <span>Powered by</span>
                <a
                    href="https://www.w3schools.com/w3css/default.asp"
                    target="blank"
                >
                    w3.css
                </a>
            </Powered>
        </FooterContainer>
    );
}
