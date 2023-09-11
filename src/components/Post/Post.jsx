import styled from 'styled-components';
import PostCard from './PostCard';
import profile_img from './../../images/sub/avatar_girl2.jpg';
import PopularCard from '../PopularCard';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaSnapchatSquare,
    FaFlickr,
    FaTwitter,
    FaLinkedinIn,
} from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { inspiration, popular, post } from '../../data/atom';

const PostContainer = styled.section`
    width: 100%;
    background-color: #ddd;
    display: flex;
    .post_title {
        font-size: 20px;
        padding: 24px 12px;
        color: white;
        background-color: black;
    }
    @media screen and (max-width: 993px) {
        flex-direction: column;
    }
`;

const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    margin: 12px;
`;

const SideContent = styled.aside`
    padding: 12px;
    margin: 12px;
`;

const SideProfile = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    color: white;
    margin-bottom: 24px;
`;

const ProfileImg = styled.img`
    flex-basis: 70%;
    filter: grayscale(75%);
`;

const ProfileContext = styled.div`
    flex-basis: 30%;
    p {
        padding: 12px 12px 24px 12px;
    }
`;

const SidePopular = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
`;

const SideAdvertise = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;
    padding: 24px;
    margin-bottom: 24px;
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
    padding: 24px;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    span {
        background-color: #ddd;
        padding: 4px 8px;
        margin: 4px 8px;
    }
    span:first-child {
        background-color: black;
        color: white;
        font-size: 18px;
    }
`;

const SideInspiration = styled.div`
    background-color: white;
    padding: 24px 0;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const InspirationImg = styled.img`
    width: 180px;
    height: 120px;
    margin: 8px;
`;

const SideFollow = styled.div`
    background-color: white;
    margin-bottom: 24px;
    * {
        color: black;
        font-size: 18px;
        padding: 8px;
        margin: 4px;
        &:hover {
            opacity: 0.5;
        }
    }
`;

const SideSubscribe = styled.div`
    padding: 24px;
    background-color: white;
    display: flex;
    flex-direction: column;
    input {
        font-size: 18px;
        margin: 24px 0;
        padding: 8px 12px 8px 4px;
    }
    button {
        background-color: tomato;
        color: white;
        padding: 12px 0;
        font-size: 18px;
        &:hover {
            color: black;
            background-color: #ddd;
        }
    }
`;

export default function Post({ modalShow, setModalShow }) {
    const postData = useRecoilValue(post);
    const popularData = useRecoilValue(popular);
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
    const inspirationData = useRecoilValue(inspiration);

    const handleModal = () => {
        setModalShow(!modalShow);
    };

    return (
        <PostContainer>
            <PostContent>
                {postData.map((item) => {
                    return <PostCard item={item} key={item.id} />;
                })}
            </PostContent>
            <SideContent>
                <SideProfile>
                    <ProfileImg src={profile_img} />
                    <h5 className="post_title">My Name</h5>
                    <ProfileContext>
                        <p>
                            Just me, myself and I, exploring the universe of
                            uknownment. I have a heart of love and a interest of
                            lorem ipsum and mauris neque quam blog. I want to
                            share my world with you.
                        </p>
                    </ProfileContext>
                </SideProfile>
                <h5 className="post_title">Popular Posts</h5>
                <SidePopular>
                    {popularData.map((item) => {
                        return <PopularCard key={item.id} item={item} />;
                    })}
                </SidePopular>
                <h5 className="post_title">Advertise</h5>
                <SideAdvertise>
                    <div>
                        <p>Your AD Here</p>
                    </div>
                </SideAdvertise>
                <h5 className="post_title">Tags</h5>
                <SideTags>
                    {tags.map((item, index) => {
                        return <span key={index}>{item}</span>;
                    })}
                </SideTags>
                <h5 className="post_title">Inspiration</h5>
                <SideInspiration>
                    {inspirationData.map((item, index) => {
                        return (
                            <InspirationImg src={item.image_path} key={index} />
                        );
                    })}
                </SideInspiration>
                <h5 className="post_title">Follow Me</h5>
                <SideFollow>
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                    <FaSnapchatSquare />
                    <FaFlickr />
                    <FaTwitter />
                    <FaLinkedinIn />
                </SideFollow>
                <h5 className="post_title">Subscribe</h5>
                <SideSubscribe>
                    <p>
                        Enter your e-mail below and get notified on the latest
                        blog posts.
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
        </PostContainer>
    );
}
