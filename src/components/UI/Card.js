import "./Card.css";
function Card(props) {
  const classes = "card-main " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
