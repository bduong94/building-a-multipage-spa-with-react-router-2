import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);

    history.push("/quotes");
  };

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
