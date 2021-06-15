import "./App.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import WritingContainer from "./component/WritingContainer";
import PreviewContainer from "./component/PreviewContainer";
import { useState } from "react";

function App() {
  const [article, setArticle] = useState("");
  const [socialMedia, setSocialMedia] = useState(0);

  const articleHandler = (newArticle) => {
    setArticle(newArticle);
  };

  const socialMediahandler = (newSocialMedia) => {
    setSocialMedia(newSocialMedia);

    // console.log(socialMedia)
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Writing Area</th>
            <th style={{ textAlign: "center" }}>Preview Area</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <WritingContainer
                socialMediahandler={socialMediahandler}
                articleHandler={articleHandler}
              />
            </td>
            <td>
              <PreviewContainer socialMedia={socialMedia} article={article} />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
