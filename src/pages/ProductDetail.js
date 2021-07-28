import { useState } from "react";
import { phones } from "../data/PhoneData";
import Dropdown from "../components/Dropdown";
import ColorMap from "../components/ColorMap";
import SpecsDetail from "../components/SpecsDetail";
var i = 0;

const ProductDetail = ({ match }) => {
  const [phone, setPhone] = useState(phones[0]);

  const ItemDetails = (props) => {
    return (
      <div
        className="item-detail"
        data-aos="zoom-out"
        data-aos-duration="300"
        data-aos-delay={(i += 50)}
      >
        <img
          src={`../icons/${props.detail}.png`}
          alt={props.detail}
          className="img"
        />
        <p className="detail">{phone.spec[props.detail]}</p>
      </div>
    );
  };
  const SectionCaption = () => {
    return (
      <div className="caption" data-aos="fade-up">
        <div className="model">{"Idle " + phone.model}</div>
        <div className="version">{phone.version}</div>
      </div>
    );
  };

  return (
    <section className="product-detail">
      <div className="gray-overlay"></div>
      <div className="section container section__cart row">
        <div className="watermark" data-aos="fade-down">
          {"Idle " + phone.model}
        </div>
        <div className="section-title">#Cart</div>
        <div className="section__content col">
          <SectionCaption />
          <Dropdown itemList={phone.options} />
          <ColorMap colors={phone.colors} />
          <div className="btn secondary" data-aos="fade-down">
            Add to Cart
          </div>
        </div>
        <div className="section__preview col" data-aos="fade-up">
          <img src="../icons/smartphone.png" alt="Smartphone" className="img" />
        </div>
      </div>
      <div className="section container section__specs container">
        <div className="section-title">#Specifications</div>
        <div className="watermark" data-aos="fade-down">
          {"Idle " + phone.model}
        </div>
        <SectionCaption />
        <div className="specs container row">
          <div className="col">
            <ItemDetails detail="camera" />
            <ItemDetails detail="chipset" />
            <ItemDetails detail="GPU" />
          </div>
          <div className="col">
            <ItemDetails detail="weights" />
            <ItemDetails detail="screen" />
            <ItemDetails detail="battery" />
          </div>
        </div>
        <SpecsDetail phone={phone} />
      </div>
    </section>
  );
};

export default ProductDetail;
