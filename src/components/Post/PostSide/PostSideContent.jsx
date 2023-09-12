import { styled } from 'styled-components';

// import components
import Profile from './Profile';
import Popular from './Popular';
import Ad from './Ad';
import Tags from './Tags';
import Inspiration from './Inspiration';
import Follow from './Follow';
import Subscribe from './Subscribe';

const SideContent = styled.aside`
    padding: var(--padding-medium);
    margin: var(--margin-medium);
`;

export const SidePostTitle = styled.h5`
    color: var(--primary-100);
    margin: 0 0 var(--margin-small) var(--margin-small);
`;

export default function PostSideContent() {
    return (
        <SideContent>
            <Profile />
            <SidePostTitle>Popular Posts</SidePostTitle>
            <Popular />
            <SidePostTitle>Advertise</SidePostTitle>
            <Ad />
            <SidePostTitle>Tags</SidePostTitle>
            <Tags />
            <SidePostTitle>Inspiration</SidePostTitle>
            <Inspiration />
            <SidePostTitle>Follow Me</SidePostTitle>
            <Follow />
            <SidePostTitle>Subscribe</SidePostTitle>
            <Subscribe />
        </SideContent>
    );
}
