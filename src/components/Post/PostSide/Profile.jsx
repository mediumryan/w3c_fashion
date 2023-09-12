import { styled } from 'styled-components';
import profile_img from './../../../images/side/girl_hat.jpg';
import { SidePostTitle } from './PostSideContent';

const SideProfile = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--bg-100);
    color: var(--text-100);
    margin-bottom: var(--margin-medium-large);
`;

const ProfileImg = styled.img`
    flex-basis: 70%;
    filter: grayscale(75%);
    margin-bottom: var(--margin-medium);
`;

const ProfileContext = styled.div`
    flex-basis: 30%;
    p {
        padding: var(--padding-medium) var(--padding-medium)
            var(--padding-medium-large) var(--padding-medium);
    }
`;

export default function Profile() {
    return (
        <SideProfile>
            <ProfileImg src={profile_img} />
            <SidePostTitle>Jane</SidePostTitle>
            <ProfileContext>
                <p>
                    Just me, myself and I, exploring the universe of uknownment.
                    I have a heart of love and a interest of lorem ipsum and
                    mauris neque quam blog. I want to share my world with you.
                </p>
            </ProfileContext>
        </SideProfile>
    );
}
