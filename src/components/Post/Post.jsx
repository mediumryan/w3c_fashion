import styled from 'styled-components';
import PostCard from './PostCard';
import { useRecoilValue } from 'recoil';
import { post } from '../../data/atom';
import PostSideContent from './PostSideContent';

const PostContainer = styled.section`
    width: 100%;
    background-color: #ddd;
    display: flex;
    @media screen and (max-width: 993px) {
        flex-direction: column;
    }
`;

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--padding-medium);
    margin: var(--margin-medium);
`;

export default function Post() {
    const postData = useRecoilValue(post);

    return (
        <PostContainer>
            <PostContent>
                {postData.map((item) => {
                    return <PostCard item={item} key={item.id} />;
                })}
            </PostContent>
            <PostSideContent />
        </PostContainer>
    );
}
