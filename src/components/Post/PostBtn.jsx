import { FaThumbsUp } from 'react-icons/fa';
import { styled } from 'styled-components';

const PostBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
        font-size: 16px;
        padding: 8px 12px;
    }
    button:first-child {
        border: 1px solid #ddd;
        span {
            margin-left: 8px;
        }
        &:hover {
            background-color: #ddd;
        }
    }
    button:last-child {
        background-color: black;
        color: white;
        span {
            color: black;
            background-color: white;
            padding: 2px 4px;
            margin-left: 8px;
        }
        &:hover {
            color: black;
            background-color: #ddd;
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
