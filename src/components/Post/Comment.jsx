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
    border-top: 1px solid var(--primary-100);
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
    width: 120px;
    height: 100%;
    @media screen and (max-width: 600px) {
        width: 64px;
        height: 100%;
    }
`;

const CommentContent = styled.div`
    font-size: var(--font-size-micro);
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
`;

const CommentName = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: var(--margin-medium);
    h5 {
        margin-right: var(--margin-small);
        font-size: var(--font-size-small);
    }
    span {
        font-size: var(--font-size-micro);
        color: var(--primary-100);
    }
`;

const CommentComments = styled.p`
    line-height: 1.5;
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
                        <CommentContent>
                            <CommentName>
                                <h5>{comment.name}</h5>
                                <span>{comment.date}</span>
                            </CommentName>
                            <CommentComments>{comment.content}</CommentComments>
                        </CommentContent>
                    </Comments>
                );
            })}
        </CommentContainer>
    );
}
