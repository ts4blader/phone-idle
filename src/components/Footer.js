import React from "react";
import { meta } from "../data/MetaData";
import { phones } from "../data/PhoneData";
import { laptops } from "../data/LaptopData";
import {Link} from 'react-router-dom';

const FooterData = {
  phones : phones.map(phone => `${phone.model} ${phone.version}`),
  laptops : laptops.map(lap => `${lap.model} ${lap.version}`),
  terms: meta.terms,
  contacts: meta.contacts,
  support: meta.support
}

var i = 50;

const Catalog = (props) => {

  return (
    <div className="catalog" data-aos="fade-up" data-aos-delay={i+=50}>
      <h4 className="name">{props.name}</h4>
      {FooterData[props.name].map( data => (
        <p className="index">
          <Link to={`/${props.name}`}>{data}</Link>
        </p>
      ))}
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-caption" data-aos="zoom-out">
        <div className="logo">
          <img src="../icons/logo.png" alt="" />
          <h3>PhoneIdle</h3>
        </div>
        <form className="subcribe-form" data-aos="zoom-out">
          <input type="text" placeholder="Your email" className="mail-input" />
          <input type="submit" value="Newsletter" className="mail-submit" />
        </form>
      </div>
      <div className="catalog-container">
        {Object.keys(FooterData).map( name =>
          <Catalog name={name} />
        )}
      </div>
      <p className="copyright">{meta.copy + " " + meta.year}</p>
    </div>
  );
};

export default Footer;
