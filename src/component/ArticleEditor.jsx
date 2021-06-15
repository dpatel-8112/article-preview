import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function ArticleEditor({ articleHandler }) {
  const newArticleHandler = (event, editor) => {
    articleHandler(editor.getData());
    console.log(editor.getData());
  };

  return (
    <div>
      <CKEditor
        // style={{width:'500px', maxWidth : '500px'}}
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log( 'Editor is ready to use!', editor );
        }}
        onChange={newArticleHandler}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
}

export default ArticleEditor;
