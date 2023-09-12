import React from 'react';
import styled from 'styled-components';

const HeaderTitleContainer = styled.section`
    padding: var(--padding-very-large) 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;

    h1 {
        font-size: var(--font-size-large);
        margin-bottom: var(--margin-large);
        letter-spacing: -2px;
    }
    p {
        span {
            background-color: var(--bg-100);
            padding: var(--padding-micro);
        }
    }
`;

export default function HeaderTitle() {
    return (
        <HeaderTitleContainer id="header_title">
            <h1>JANE BLOGLIFE</h1>
            <p>
                Welcome to the blog of <span>Jane's world</span>
            </p>
        </HeaderTitleContainer>
    );
}
