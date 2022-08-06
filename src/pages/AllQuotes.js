import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "Brian", text: "Learning React is fun!" },
  { id: "q2", author: "Nairb", text: "Learning React is great!" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
