import React from "react";
import ArticleEditor from "./ArticleEditor";

// import Form from 'react-bootstrap/Form'

function ArticleContainer({ articleHandler }) {
  return (
    <>
      <h4>Customise Your Post!</h4>
      <p>This features and text will only appear in your {} Post</p>
      <ArticleEditor articleHandler={articleHandler} />
    </>
  );
}

export default ArticleContainer;
