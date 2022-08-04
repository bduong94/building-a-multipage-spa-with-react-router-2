import { Link } from "react-router-dom";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const quoteLink = `/quotes/${props.id}`;
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={quoteLink}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
