import React from 'react';
import styled from 'styled-components';
import BG from './../images/main/jane.jpg';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../data/atom';

const GreetingContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
`;

const GreetingContents = styled.div`
    position: absolute;
    top: 50%;
    padding: 0 var(--padding-medium-large);
    display: flex;
    flex-direction: column;
    align-items: start;
    color: white;
    h4 {
        font-size: var(--font-size-medium-large);
        font-weight: 500;
        margin-bottom: var(--margin-medium-large);
    }
    h2 {
        font-size: var(--font-size-huge);
        font-weight: 700;
        margin-bottom: var(--margin-medium-large);
    }
    button {
        text-transform: uppercase;
        padding: var(--padding-medium) var(--padding-medium-large);
        font-size: var(--font-size-medium);
        background-color: rgba(220, 220, 220, 0.5);
        &:hover {
            background-color: rgb(220, 220, 220);
        }
    }
`;

export default function Greeting() {
    const setModal = useSetRecoilState(modalState);

    const handleModal = () => {
        setModal((prev) => !prev);
    };
    return (
        <GreetingContainer bg={BG}>
            <GreetingContents>
                <h4>Jane's</h4>
                <h2>FASHION BLOG</h2>
                <button
                    onClick={() => {
                        handleModal();
                    }}
                >
                    subscribe
                </button>
            </GreetingContents>
        </GreetingContainer>
    );
}
