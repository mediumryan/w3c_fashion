import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { modalState } from '../../data/atom';
import ModalForm from './ModalForm';

const ModalContainer = styled.div`
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%);
    padding: var(--padding-medium-large);
    width: 50%;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    background-color: var(--bg-300);
    border: 1px solid black;
    z-index: 999;
    * {
        margin-bottom: var(--margin-medium);
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 65%;
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 75%;
    }
`;

const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--margin-medium-large);
    color: var(--primary-100);
    * {
        font-weight: 700;
        font-size: var(--font-size-medium);
    }
`;

const ModalClose = styled.button`
    color: var(--primary-100);
`;

const ModalDescription = styled.p`
    margin-bottom: var(--margin-medium-large);
    font-size: var(--font-size-small);
    line-height: 1.5;
`;

export default function Modal() {
    const [modal, setModal] = useRecoilState(modalState);

    const handleModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <ModalContainer show={modal}>
            <ModalTitle>
                <h3>SUBSCRIBE</h3>
                <ModalClose>
                    <FaTimes
                        onClick={() => {
                            handleModal();
                        }}
                    />
                </ModalClose>
            </ModalTitle>
            <ModalDescription>
                Join my mailing list to receive updates on the latest blog posts
                and other things.
            </ModalDescription>
            <ModalForm />
        </ModalContainer>
    );
}
