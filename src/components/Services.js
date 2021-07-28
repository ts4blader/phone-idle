import React from "react";
import { services } from "../data/ServicesData";

const Card = (props) => {
  return (
    <div className="card" data-aos="zoom-in">
      <img src={props.service.img} alt={props.service.name} className="img" />
      <div className="name">{props.service.name}</div>
      <div className="description">{props.service.description}</div>
    </div>
  )
}

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="title" data-aos="fade-up">Services</h2>
      <div className="card-grp">
        {services.map((service) => (
          <Card service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
