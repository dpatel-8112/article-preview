import React from "react";
import FBPreview from "./FBPreview";
import InstaPreview from "./InstaPreview";

function PreviewContainer({ socialMedia, article }) {
  const createMarkup = () => {
    return { __html: `${article}` };
  };

  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  // const finalArticle =
  return (
    <div>
      {socialMedia == 0 ? (
        <FBPreview createMarkup={MyComponent()} />
      ) : (
        <InstaPreview createMarkup={MyComponent()} />
      )}
      {console.log(socialMedia)}

      <div></div>
    </div>
  );
}

export default PreviewContainer;
