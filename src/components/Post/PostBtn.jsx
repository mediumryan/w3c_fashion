import { FaThumbsUp } from 'react-icons/fa';
import { styled } from 'styled-components';

const PostBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: var(--margin-medium-large);
`;

const BtnBox = styled.button`
    font-size: var(--font-size-micro);
    padding: var(--padding-double-small);
    background-color: var(--primary-100);
    color: var(--primary-300);
    transition: 500ms all;
    span {
        margin-left: var(--margin-small);
    }
    &:hover {
        transform: scale(1.15);
    }
`;

export default function PostBtn({ setShowComment, item }) {
    return (
        <PostBtnContainer>
            <BtnBox>
                <FaThumbsUp />
                <span>Like</span>
            </BtnBox>
            <BtnBox
                onClick={() => {
                    setShowComment((prev) => !prev);
                }}
            >
                Replies<span>{item.reply}</span>
            </BtnBox>
        </PostBtnContainer>
    );
}
