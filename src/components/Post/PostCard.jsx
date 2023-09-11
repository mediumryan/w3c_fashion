import React, { useState } from 'react';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/fa';
import Comment from '../Comment';
import PostBtn from './PostBtn';

const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 24px 48px;
    margin-bottom: 24px;
`;

const PostTitle = styled.h2`
    font-size: 28px;
    font-weight: 500;
`;

const PostTitleDescription = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin: 24px 0;
    letter-spacing: -1px;
    span {
        color: grey;
    }
`;

const PostImgContainer = styled.div`
    position: relative;
    width: 100%;
`;

const PostImg = styled.img`
    width: 100%;
`;

const PostDescription = styled.div`
    p {
        font-weight: 350;
    }
`;

export default function PostCard({ item }) {
    const [showComment, setShowComment] = useState(true);

    return (
        <PostCardContainer>
            <PostTitle>{item.title}</PostTitle>
            <PostTitleDescription>
                {item.title_description}
                <span> {item.date}</span>
            </PostTitleDescription>
            <PostImgContainer>
                <PostImg src={item.image_path} />
            </PostImgContainer>
            <PostDescription>
                <p>{item.description1}</p>
                <p>{item.description2}</p>
            </PostDescription>
            <PostBtn setShowComment={setShowComment} item={item} />
            <Comment showComment={showComment} />
        </PostCardContainer>
    );
}
