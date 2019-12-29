import React from "react";
import "./tweet-card.css";

interface Props {
  handle: string;
  tweetContent: string;
}

export const TweetCard = (props: Props) => {
  return (
    <div className="card">
      <div className="profile-picture">
        <img
          className="twitter-logo"
          src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"
        />
      </div>

      <div className="tweet-content">
        <div className="handle">{props.handle}</div>
        <div className="content">{props.tweetContent}</div>
      </div>
    </div>
  );
};
