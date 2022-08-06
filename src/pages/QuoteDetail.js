import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Brian", text: "Learning React is fun!" },
  { id: "q2", author: "Nairb", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const commentPath = `/quotes/${params.quoteId}/comments`;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote
        key={quote.id}
        author={quote.author}
        text={quote.text}
      />
      <Route path={`/quotes/${params.quoteId}/`} exact>
        <div className="centered">
          <Link className="btn--flat" to={commentPath}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={commentPath}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
