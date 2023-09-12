import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { modalState } from '../../data/atom';

const ModalFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    input {
        padding: var(--padding-medium);
    }
    button {
        background-color: var(--primary-200);
        color: var(--primary-300);
        padding: var(--padding-medium) 0;
        &:hover {
            background-color: var(--primary-300);
            color: var(--primary-200);
        }
    }
`;

export default function ModalForm() {
    const setModal = useSetRecoilState(modalState);

    const handleModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <ModalFormContainer>
            <input placeholder="Enter e-mail" />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleModal();
                }}
            >
                SUBSCRIBE
            </button>
        </ModalFormContainer>
    );
}
