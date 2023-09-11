import { FaThumbsUp } from 'react-icons/fa';
import { styled } from 'styled-components';

const PostBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
        font-size: var(--font-size-micro);
        padding: var(--padding-double-small);
    }
    button:first-child {
        border: 1px solid var(--bg-200);
        span {
            margin-left: var(--margin-small);
        }
        &:hover {
            background-color: var(--bg-200);
        }
    }
    button:last-child {
        background-color: var(--text-100);
        color: var(--bg-100);
        span {
            color: var(--text-100);
            background-color: var(--bg-100);
            padding: 2px 4px;
            margin-left: 8px;
        }
        &:hover {
            color: var(--text-100);
            background-color: var(--bg-200);
        }
    }
`;

export default function PostBtn({ setShowComment, item }) {
    return (
        <PostBtnContainer>
            <button>
                <FaThumbsUp />
                <span>Like</span>
            </button>
            <button
                onClick={() => {
                    setShowComment((prev) => !prev);
                }}
            >
                Replies<span>{item.reply}</span>
            </button>
        </PostBtnContainer>
    );
}
