import React, { useState, useEffect } from "react";
import { Icon } from "../res/ResourceHelper";
const OnTop = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 200;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <a href="/" className={scroll ? "ontop-btn show" : "ontop-btn"}>
      <Icon icon="up-arrow.png" alt="up" />
    </a>
  );
};

export default OnTop;
