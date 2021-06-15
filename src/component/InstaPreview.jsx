import React from "react";
import style from "./preview.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function InstaPreview({ createMarkup }) {
  return (
    <div>
      <div id="inner_wrap">
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
              <Card.Text>
                <div>
                  <img
                    src="https://homepages.cae.wisc.edu/~ece533/images/boat.png"
                    alt="Norway"
                    style={{ width: "100%" }}
                  />
                </div>

                <div>
                  <Button
                    variant="outline-danger"
                    style={{ float: "", border: 0 }}
                    size="sm"
                  >
                    🤍
                  </Button>
                  <Button
                    variant="outline-success"
                    style={{ float: "", border: 0 }}
                    size="sm"
                  >
                    💬
                  </Button>
                  <Button
                    variant="outline-dark"
                    style={{ float: "", border: 0 }}
                    size="sm"
                  >
                    🔗
                  </Button>
                  <Button
                    variant="outline-info"
                    style={{ float: "right", border: 0 }}
                    size="sm"
                  >
                    🔖
                  </Button>
                </div>

                <div>
                  <strong>batingo11 </strong>
                  {createMarkup}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default InstaPreview;
