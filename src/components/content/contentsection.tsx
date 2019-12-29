import React from "react";
import "./contentsection.css";
import { TweetCard } from "../tweet-card/tweet-card";

export const ContentSection = () => {
  const dummyCards = ["1", "2", "3", "4", "5", "6", "7"];
  const dummyText =
    "Lorem ipsum dolor sit amet, legimus propriae gubergren at est, in has imperdiet prodesset, vis ex dictas eripuit comprehensam. Ut mei insolens similique rationibus, quo etiam decore scriptorem ne. Mel nibh eros percipitur ea. Ei sea alii facilisi, pro ne unum honestatis. Quo in amet tota similique, mei odio incorrupte eu.";

  return (
    <div className="content-wrapper">
      <div className="top-bar">
        <div className="home-text">Home</div>
      </div>

      <div className="card-section">
        {dummyCards.map(card => {
          return <TweetCard handle={card} tweetContent={dummyText} />;
        })}
      </div>
    </div>
  );
};
