import React from "react";
import ArticleContainer from "./ArticleContainer";
import SocialButtons from "./SocialButtons";

function WritingContainer({ socialMediahandler, articleHandler }) {
  return (
    <div>
      <SocialButtons socialMediahandler={socialMediahandler} />
      <ArticleContainer articleHandler={articleHandler} />
    </div>
  );
}

export default WritingContainer;
