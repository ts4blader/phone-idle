import React from "react";
import { Link } from "react-router-dom";

const Slide = (props) => {
  const animationClass = (className) => {
    const slideCheck = props.slideContent.id === props.current;
    return slideCheck ? `${className} play` : `${className}`;
  };

  return (
    <div className="slide">
      <p className={animationClass("watermark")}>
        {"Idle " + props.slideContent.model}
      </p>
      <div className="content">
        <h2 className={animationClass("caption")}>
          {"Idle " + props.slideContent.model}
        </h2>
        <p className={animationClass("version")}>
          {props.slideContent.version}
        </p>
        <p className={animationClass("description")}>
          {props.slideContent.description}
        </p>
        <Link to={`/product/${props.slideContent.code}`}>
          <div className={animationClass("btn") + " secondary"}>Learn More</div>
        </Link>
      </div>
      <div className={animationClass("preview")}>
        <img src={props.slideContent.img} alt="Smartphone" />
      </div>
    </div>
  );
};

export default Slide;
