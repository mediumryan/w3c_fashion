import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { modalState } from '../data/atom';

const ModalContainer = styled.div`
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%);
    padding: 24px;
    width: 80%;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    background-color: white;
    color: black;
    border: 1px solid black;
    z-index: 999;
    * {
        margin-bottom: 16px;
    }
`;

const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    * {
        font-weight: 700;
        font-size: 24px;
    }
`;

const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    input {
        padding: 12px;
    }
    button {
        background-color: tomato;
        color: white;
        padding: 16px 0;
        &:hover {
            background-color: #ddd;
            color: black;
        }
    }
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
                <button>
                    <FaTimes
                        onClick={() => {
                            handleModal();
                        }}
                    />
                </button>
            </ModalTitle>
            <div>
                Join my mailing list to receive updates on the latest blog posts
                and other things.
            </div>
            <ModalForm>
                <input placeholder="Enter e-mail" />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleModal();
                    }}
                >
                    SUBSCRIBE
                </button>
            </ModalForm>
        </ModalContainer>
    );
}
