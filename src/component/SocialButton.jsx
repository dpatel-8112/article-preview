import React, { useState } from "react";
import { Button } from "react-bootstrap";

function SocialButton({ socialMediahandler, key, index, value }) {
  const bgcolor = {
    facebook: "primary",
    instagram: "danger",
  };

  const [active, setActive] = useState(0);

  const activeSocialHandler = (event) => {
    setActive(event.target.getAttribute("data-index"));
    socialMediahandler(event.target.getAttribute("data-index"));
    console.log(event.target.getAttribute("data-index"));
  };

  return (
    <>
      <Button
        style={{ margin: "10px" }}
        key={index}
        data-index={index}
        onClick={activeSocialHandler}
        variant={value == "FaceBook" ? "primary" : "danger"}
      >
        {value}
      </Button>
    </>
  );
}

export default SocialButton;
