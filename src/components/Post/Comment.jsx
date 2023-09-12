import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { comment } from '../../data/atom';

const CommentContainer = styled.div`
    padding: var(--padding-large) var(--padding-medium-large) 0
        var(--padding-medium-large);
    margin: var(--margin-medium-large) 0 var(--margin-medium) 0;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #ddd;
`;

const Comments = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-medium-large);
    width: 100%;
`;

const CommentsImgContainer = styled.div`
    flex-basis: 10%;
    position: relative;
    width: 100px;
    height: 100px;
    margin-right: calc(var(--margin-very-large) * 2);
    @media screen and (max-width: 600px) {
        width: 64px;
        height: 64px;
    }
`;

const CommentsImg = styled.img`
    position: absolute;
    left: 0;
    top: 0%;
    width: 100px;
    height: 100px;
    @media screen and (max-width: 600px) {
        width: 64px;
        height: 64px;
    }
`;

const CommentOtherContainer = styled.div`
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
    p:first-child {
        font-weight: 600;
        margin: 0 0 var(--margin-medium) 0;
        span {
            margin-left: var(--margin-small);
            font-size: var(--font-size-micro);
            font-weight: 400;
            color: grey;
        }
    }
    p:last-child {
        font-size: var(--font-size-micro);
        line-height: 1.5;
        font-weight: 400;
        margin: 0;
    }
`;

export default function Comment({ showComment }) {
    const commentData = useRecoilValue(comment);

    return (
        <CommentContainer show={showComment}>
            {commentData.map((comment) => {
                return (
                    <Comments key={comment.id}>
                        <CommentsImgContainer>
                            <CommentsImg src={comment.avatar} />
                        </CommentsImgContainer>
                        <CommentOtherContainer>
                            <p>
                                {comment.name}
                                <span>{comment.date}</span>
                            </p>
                            <p>{comment.content}</p>
                        </CommentOtherContainer>
                    </Comments>
                );
            })}
        </CommentContainer>
    );
}
