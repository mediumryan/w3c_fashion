import React, { useState } from "react";
import styled from "styled-components";
import { comment_data } from "./../comment_data";

const CommentContainer = styled.div`
  padding: 36px 24px 0 24px;
  margin: 24px 0 12px 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #ddd;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
`;

const CommentsImgContainer = styled.div`
  flex-basis: 10%;
  position: relative;
  width: 100px;
  height: 100px;
  margin-right: 64px;
`;

const CommentsImg = styled.img`
  position: absolute;
  left: 0;
  top: 0%;
  width: 100px;
  height: 100px;
`;

const CommentOtherContainer = styled.div`
  flex-basis: 90%;
  display: flex;
  flex-direction: column;
  p:first-child {
    font-weight: 600;
    margin: 0 0 12px 0;
    span {
      margin-left: 8px;
      font-size: 16px;
      font-weight: 400;
      color: grey;
    }
  }
  p:last-child {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
`;

export default function Comment({ showComment }) {
  const [commentData] = useState(comment_data);

  return (
    <CommentContainer show={showComment}>
      {commentData.map((item) => {
        return (
          <Comments>
            <CommentsImgContainer>
              <CommentsImg src={item.avatar} />
            </CommentsImgContainer>
            <CommentOtherContainer>
              <p>
                {item.name}
                <span>{item.date}</span>
              </p>
              <p>{item.content}</p>
            </CommentOtherContainer>
          </Comments>
        );
      })}
    </CommentContainer>
  );
}
