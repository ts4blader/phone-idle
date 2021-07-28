import Menu from "../components/Menu";
import Account from "../components/Account.js";
import newlogo from "../icons/newlogo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let lastScroll = 0;

const Header = () => {
  const [ontop, setOnTop] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      //scroll down to the top
      const scrollCheck = window.scrollY < 150;
      const scroll = window.scrollY;
      if (scrollCheck !== ontop) {
        setOnTop(scrollCheck);
      }
      if (scroll <= 150) {
        setHide(false);
        return;
      }
      if (scroll >= lastScroll) setHide(true);
      else if (scroll < lastScroll) setHide(false);

      setTimeout(() => {
        lastScroll = scroll;
      }, 1);
    });
  });

  const headerController = () => {
    return ontop ? "header ontop" : "header" + (hide ? " hide" : "");
  };

  return (
    <div className={headerController()}>
      <div className="left-side">
        <Menu />
        {/* Logo  */}
        <Link to="/">
          <div className="logo">
            <img src={newlogo} alt="Logo" />
          </div>
        </Link>
      </div>
      <div className="right-side">
        <Account />
      </div>
    </div>
  );
};

export default Header;
