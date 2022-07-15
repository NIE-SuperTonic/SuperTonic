import React, { useState } from "react";
import "../assets/scss/LikeButton.css";

const LikeButtonComponent = () => {
  const [like, setLike] = useState(""),
  [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike((isLike?"":"💜"));
      setIsLike(!isLike);
    };

  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #ad7dc9;
        }
        .liked {
            font-weight: bold;
            color: #1565c0;
          }
      `}</style>
    </>
  );
};

export default LikeButtonComponent;
