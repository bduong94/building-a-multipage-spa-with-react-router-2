import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const commentPath = `/quotes/${params.quoteId}/comments`;

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={commentPath}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
