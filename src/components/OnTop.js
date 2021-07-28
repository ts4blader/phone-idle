import React, { useState, useEffect } from "react";

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
    <a href="#" className={scroll ? "ontop-btn show" : "ontop-btn"}>
      <img src="../icons/up-arrow.png" alt="Up" />
    </a>
  );
};

export default OnTop;
