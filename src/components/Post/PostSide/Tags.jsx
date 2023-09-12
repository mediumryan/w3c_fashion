import React from 'react';
import { styled } from 'styled-components';

const SideTags = styled.div`
    padding: var(--padding-medium-large);
    margin-bottom: var(--margin-medium-large);
    display: flex;
    flex-wrap: wrap;
`;

const TagItems = styled.span`
    font-size: var(--font-size-micro);
    background-color: var(--bg-200);
    padding: var(--padding-double-small);
    margin: var(--margin-micro) var(--margin-small);
    cursor: pointer;
    &:first-child {
        color: var(--primary-300);
        background-color: var(--primary-200);
    }
`;

export default function Tags() {
    const tags = [
        'Fashion',
        'New York',
        'London',
        'Hats',
        'Norway',
        'Sweaters',
        'Ideas',
        'Deals',
        'Accessories',
        'News',
        'Clothing',
        'Shopping',
        'Jeans',
        'Trends',
    ];

    return (
        <SideTags>
            {tags.map((item, index) => {
                return <TagItems key={index}>{item}</TagItems>;
            })}
        </SideTags>
    );
}
