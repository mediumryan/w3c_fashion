import { useRecoilValue, useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { inspiration, modalState, popular } from '../../data/atom';
import profile_img from './../../images/side/girl_hat.jpg';
import PopularCard from './../PopularCard';
import {
    FaFacebookSquare,
    FaFlickr,
    FaInstagramSquare,
    FaLinkedinIn,
    FaSnapchatSquare,
    FaTwitter,
} from 'react-icons/fa';

const SideContent = styled.aside`
    padding: var(--padding-medium);
    margin: var(--margin-medium);
`;

const SidePostTitle = styled.h5`
    color: var(--accent-100);
    margin: 0 0 var(--margin-small) var(--margin-small);
`;

const SideProfile = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--text-100);
    color: var(--bg-100);
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

const SidePopular = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: var(--margin-medium-large);
`;

const SideAdvertise = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;
    padding: var(--padding-medium-large);
    margin-bottom: var(--margin-medium-large);
    div {
        width: 90%;
        height: 90%;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const SideTags = styled.div`
    background-color: white;
    padding: var(--padding-medium-large);
    margin-bottom: var(--margin-medium-large);
    display: flex;
    flex-wrap: wrap;
    span {
        background-color: #ddd;
        padding: var(--padding-double-micro);
        margin: var(--margin-micro) var(--margin-small);
    }
    span:first-child {
        background-color: black;
        color: white;
    }
`;

const SideInspiration = styled.div`
    background-color: white;
    padding: var(--padding-medium-large) 0;
    margin-bottom: var(--margin-medium-large);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const InspirationImg = styled.img`
    width: 180px;
    height: 120px;
    margin: var(--margin-small);
`;

const SideFollow = styled.div`
    background-color: white;
    margin-bottom: var(--margin-medium-large);
    * {
        color: black;
        font-size: var(--font-size-medium-large);
        padding: var(--padding-small);
        margin: var(--margin-micro);
        &:hover {
            opacity: 0.5;
        }
    }
`;

const SideSubscribe = styled.div`
    padding: var(--padding-medium-large);
    background-color: white;
    display: flex;
    flex-direction: column;
    input {
        font-size: var(--font-size-small);
        margin: var(--margin-medium-large) 0;
        padding: var(--margin-small) var(--margin-medium) var(--margin-small)
            var(--margin-micro);
    }
    button {
        background-color: tomato;
        color: white;
        padding: var(--padding-medium) 0;
        font-size: var(--font-size-small);
        &:hover {
            color: black;
            background-color: #ddd;
        }
    }
`;

export default function PostSideContent() {
    const popularData = useRecoilValue(popular);
    const inspirationData = useRecoilValue(inspiration);
    const tags = [
        'Fashion',
        'New York',
        'London',
        'Hats',
        'Norway',
        'Sweaters',
        'Ideas',
        'Deals',
        'Accessories',
        'News',
        'Clothing',
        'Shopping',
        'Jeans',
        'Trends',
    ];

    const setModal = useSetRecoilState(modalState);

    const handleModal = () => {
        setModal((prev) => !prev);
    };

    return (
        <SideContent>
            <SideProfile>
                <ProfileImg src={profile_img} />
                <SidePostTitle>Jane</SidePostTitle>
                <ProfileContext>
                    <p>
                        Just me, myself and I, exploring the universe of
                        uknownment. I have a heart of love and a interest of
                        lorem ipsum and mauris neque quam blog. I want to share
                        my world with you.
                    </p>
                </ProfileContext>
            </SideProfile>
            <SidePostTitle>Popular Posts</SidePostTitle>
            <SidePopular>
                {popularData.map((item) => {
                    return <PopularCard key={item.id} item={item} />;
                })}
            </SidePopular>
            <SidePostTitle>Advertise</SidePostTitle>
            <SideAdvertise>
                <div>
                    <p>Your AD Here</p>
                </div>
            </SideAdvertise>
            <SidePostTitle>Tags</SidePostTitle>
            <SideTags>
                {tags.map((item, index) => {
                    return <span key={index}>{item}</span>;
                })}
            </SideTags>
            <SidePostTitle>Inspiration</SidePostTitle>
            <SideInspiration>
                {inspirationData.map((item, index) => {
                    return <InspirationImg src={item.image_path} key={index} />;
                })}
            </SideInspiration>
            <SidePostTitle>Follow Me</SidePostTitle>
            <SideFollow>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaSnapchatSquare />
                <FaFlickr />
                <FaTwitter />
                <FaLinkedinIn />
            </SideFollow>
            <SidePostTitle>Subscribe</SidePostTitle>
            <SideSubscribe>
                <p>
                    Enter your e-mail below and get notified on the latest blog
                    posts.
                </p>
                <input placeholder="Enter e-mail" />
                <button
                    onClick={() => {
                        handleModal();
                    }}
                >
                    Subscribe
                </button>
            </SideSubscribe>
        </SideContent>
    );
}
