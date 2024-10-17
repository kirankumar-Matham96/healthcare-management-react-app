import cardStyes from "./index.module.css";

export const CustomCard = (props) => {
  return <div className={cardStyes.bgContainer}>{props.children}</div>;
};
