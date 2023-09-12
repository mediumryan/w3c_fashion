import React from 'react';
import { styled } from 'styled-components';

const SideAdvertise = styled.div`
    background-color: var(--bg-200);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;
    padding: var(--padding-medium-large);
    margin-bottom: var(--margin-medium-large);
`;

const AdContent = styled.div`
    width: 90%;
    height: 90%;
    background-color: var(--bg-100);
    color: var(--accent-100);
    font-size: var(--font-size-medium);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Ad() {
    return (
        <SideAdvertise>
            <AdContent>
                <p>Your AD Here</p>
            </AdContent>
        </SideAdvertise>
    );
}
