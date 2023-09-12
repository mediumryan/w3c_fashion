import React from 'react';
import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { modalState } from '../../../data/atom';

const SideSubscribe = styled.div`
    padding: var(--padding-medium-large);
    background-color: var(--bg-200);
    display: flex;
    flex-direction: column;
    input {
        border: none;
        font-size: var(--font-size-small);
        margin: var(--margin-medium-large) 0;
        padding: var(--margin-small) var(--margin-medium) var(--margin-small)
            var(--margin-micro);
    }
    button {
        background-color: var(--primary-200);
        color: var(--primary-300);
        padding: var(--padding-medium) 0;
        font-size: var(--font-size-small);
        &:hover {
            opacity: 0.77;
        }
    }
`;

export default function Subscribe() {
    const setModal = useSetRecoilState(modalState);

    const handleModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <SideSubscribe>
            <p>
                Enter your e-mail below and get notified on the latest blog
                posts.
            </p>
            <input placeholder="Enter e-mail" />
            <button
                onClick={() => {
                    handleModal();
                }}
            >
                Subscribe
            </button>
        </SideSubscribe>
    );
}
