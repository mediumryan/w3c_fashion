import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: grey;
    color: white;
    padding: var(--padding-very-large) var(--padding-large);
    * {
        font-size: var(--font-size-micro);
    }
    button {
        display: flex;
        align-items: center;
        background-color: black;
        padding: var(--padding-medium);
        margin-bottom: var(--margin-medium-large);
        &:hover {
            color: black;
            background-color: #aaa;
        }
        span {
            margin-left: var(--margin-medium);
        }
    }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <button>
                <a
                    href="#header_title"
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    <FaArrowUp /> <span>To the Top</span>
                </a>
            </button>
            <p>
                Powered by{' '}
                <a
                    href="https://www.w3schools.com/w3css/default.asp"
                    target="blank"
                    style={{ color: 'white' }}
                >
                    w3.css
                </a>
            </p>
        </FooterContainer>
    );
}
