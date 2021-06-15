import React from "react";
import style from "./preview.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FBPreview({ createMarkup }) {
  return (
    <div>
      <div className={style.preview}>
        <Card style={{ width: "100%", minHeight: "-webkit-fill-available" }}>
          <Row>
            <Col xs={2} md={2}>
              <Card.Img
                style={{ margin: "10px" }}
                variant="top"
                src="./logo512.png"
              />
            </Col>
            <Col xs={8} md={8}>
              <strong> Batingo 11</strong>
              <div> Today at 02:22 PM</div>
            </Col>
            <Col xs={2} md={2}>
              ...
            </Col>
          </Row>
          <Card.Body>
            <Card.Text>{createMarkup}</Card.Text>
            <hr />
            <Row>
              <Col style={{ textAlign: "center" }} xs md lg="4">
                <Button variant="outline-primary" size="sm">
                  Like
                </Button>
              </Col>
              <Col style={{ textAlign: "center" }} xs md lg="4">
                <Button variant="outline-success" size="sm">
                  Comment
                </Button>
              </Col>
              <Col style={{ textAlign: "center" }} xs md lg="4">
                <Button variant="outline-dark" size="sm">
                  Share
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default FBPreview;
