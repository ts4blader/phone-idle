import { useState } from "react";

const SpecsDetails = (props) => {
  const [open, setOpen] = useState(false);
  const openDetail = () => {
    setOpen(true);
  };
  const closeDetail = () => {
    setOpen(false);
  };
  return (
    <div className="specs-detail-wrapper">
      <div className="btn secondary" onClick={openDetail} data-aos="zoom-in">
        More
      </div>

      <div className={open ? "specs-detail open" : "specs-detail"}>
        <div className="specs-detail__title">
          <h3 className="">Specifications</h3>
          <div className="model">
            <p>{props.phone.code}</p>
            <div className="bar"></div>
          </div>
          <div className="close-btn" onClick={closeDetail}>
            <img src="../icons/add.png" alt="close" className="img" />
          </div>
        </div>

        <div className="specs-container">
          {Object.keys(props.phone.spec).map((key) => {
            return (
              <div className="spec__row row">
                <p className="spec__row__key col">{key}</p>
                <p className="spec__row__value col">{props.phone.spec[key]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpecsDetails;
