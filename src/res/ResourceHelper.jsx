export const Icon = ({ icon, alt = "" }) => {
  return (
    <img
      src={require("../res/icons/" + icon).default}
      alt={alt}
      className="icon"
    />
  );
};
export const Image = ({ img, alt = "" }) => {
  return (
    <img
      src={require("../res/images/" + img).default}
      alt={alt}
      className="img"
    />
  );
};
