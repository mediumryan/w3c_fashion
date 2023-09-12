import React from 'react';
import styled from 'styled-components';

const PopularCardContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: var(--padding-medium);
    border-bottom: 1px solid #ddd;
    &:hover {
        background-color: grey;
    }
`;

const PopularImg = styled.img`
    width: 54px;
    height: 54px;
    flex-grow: 10%;
    margin-right: var(--margin-medium-large);
`;

const PopularContext = styled.div`
    flex-grow: 90%;
    font-size: var(--font-size-small);
    p:first-child {
        font-weight: 700;
        margin-bottom: var(--margin-small);
    }
    p: last-child {
        font-size: var(--font-size-micro);
    }
`;

export default function PopularCard({ item }) {
    return (
        <PopularCardContainer>
            <PopularImg src={item.image_path} />
            <PopularContext>
                <p>{item.title}</p>
                <p>{item.context}</p>
            </PopularContext>
        </PopularCardContainer>
    );
}
