import React from "react";
import SocialButton from "./SocialButton";

function SocialButtons({ socialMediahandler }) {
  const socialMedias = [
    {
      key: 0,
      value: "FaceBook",
    },
    {
      key: 1,
      value: "Instagram",
    },
  ];

  return (
    <div>
      {socialMedias.map((item) => (
        <SocialButton
          socialMediahandler={socialMediahandler}
          key={item.key}
          index={item.key}
          value={item.value}
        />
      ))}
    </div>
  );
}

export default SocialButtons;
