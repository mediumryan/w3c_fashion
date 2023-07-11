import React, { useState } from "react";
import styled from "styled-components";
import { FaThumbsUp } from "react-icons/fa";
import Comment from "./Comment";

const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 24px 48px;
  margin-bottom: 24px;
  h2 {
    font-size: 28px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    margin: 24px 0;
    letter-spacing: -1px;
    span {
      color: grey;
    }
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

export default function PostCard({ item }) {
  const [showComment, setShowComment] = useState(true);

  return (
    <PostCardContainer>
      <h2>{item.title}</h2>
      <p>
        {item.title_description}
        <span> {item.date}</span>
      </p>
      <PostImgContainer>
        <PostImg src={item.image_path} />
      </PostImgContainer>
      <PostDescription>
        <p>{item.description1}</p>
        <p>{item.description2}</p>
      </PostDescription>
      <PostBtnContainer>
        <button>
          <FaThumbsUp />
          <span>Like</span>
        </button>
        <button
          onClick={() => {
            setShowComment(!showComment);
          }}
        >
          Replies<span>{item.reply}</span>
        </button>
      </PostBtnContainer>
      <Comment showComment={showComment} />
    </PostCardContainer>
  );
}
