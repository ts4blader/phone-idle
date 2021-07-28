const Button = ({ content, type }) => {
  return <div className={`btn btn--${type}`}>{content}</div>;
};
export default Button;
