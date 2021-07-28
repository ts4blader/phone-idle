import React from "react";

const Card = (pros) => {
  return (
    <div className="card">
      {pros.product.soldOut ? <div className="soldout-overlay"></div> : ""}
      <div className="preview">
        <img src={pros.product.img} alt="Smartphone" />
      </div>
      <div className="name">
        {pros.product.model + " " + pros.product.version}
      </div>
      <div className="price">{pros.product.price}</div>
    </div>
  );
};

export default Card;
