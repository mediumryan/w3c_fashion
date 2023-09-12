import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import PostBtn from './PostBtn';

const PostCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-200);
    padding: var(--padding-double-large);
    margin-bottom: var(--margin-medium-large);
`;

const PostTitle = styled.h2`
    font-size: var(--font-size-medium);
    font-weight: 700;
    color: var(--primary-200);
`;

const PostTitleDescription = styled.p`
    font-size: var(--font-size-small);
    font-weight: 500;
    margin: var(--margin-medium-large) 0;
    letter-spacing: -1px;
    color: var(--primary-200);
    span {
        color: var(--primary-100);
    }
`;

const PostImgContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: var(--margin-medium);
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
