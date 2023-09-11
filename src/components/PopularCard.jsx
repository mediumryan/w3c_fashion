import React from 'react';
import styled from 'styled-components';

const PopularCardContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 12px;
    border-bottom: 1px solid #ddd;
    &:hover {
        background-color: grey;
    }
`;

const PopularImg = styled.img`
    width: 54px;
    height: 54px;
    flex-grow: 10%;
    margin-right: 24px;
`;

const PopularContext = styled.div`
    flex-grow: 90%;
    p:first-child {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 8px;
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
