import React, { useState } from "react";
import fb from "../res/icons/facebook-logo.png";
import tt from "../res/icons/twitter.png";
import mail from "../res/icons/envelope.png";
import add from "../res/icons/add.png";
import menu from "../res/icons/menu.png";

const contactIcons = [
  { alt: "facebook", url: fb },
  { alt: "twitter", url: tt },
  { alt: "gmail", url: mail },
];

function Menu() {
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };
  const openMenu = () => {
    setShow(true);
  };

  return (
    <nav className="nav">
      <div className={show ? "side-menu show" : "side-menu"}>
        <div className="close-btn" onClick={closeMenu}>
          <img src={add} alt="close" />
        </div>
        <ul className="menu">
          <li>
            <a href="/" className="active" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#product" onClick={closeMenu}>
              Product
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
        <ul className="contact">
          {contactIcons.map((contact) => (
            <li>
              <a href="/">
                <img src={contact.url} alt={contact.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamberger-btn" onClick={openMenu}>
        <img src={menu} alt="Menu" />
      </div>
    </nav>
  );
}

export default Menu;
