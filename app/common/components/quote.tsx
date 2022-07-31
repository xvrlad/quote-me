import { ScriptProps } from "next/script";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Quote: React.FC<ScriptProps> = ({ children }) => {
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes", {
        params: {
          author: "Bill Gates",
        },
      })
      .then((response) => {
        // console.log(response.data.data[0].quoteText);
        console.log(response.data.data);
        // setCurrentQuote(response.data.quoteText);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://quote-garden.herokuapp.com/api/v3/quotes", {
  //       params: {
  //         author: "Bill Gates",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.then());
  //     });
  // }, []);

  //   if (currentQuote === null) {
  //     return <h1>Loading...</h1>;
  //   } else if (currentQuote !== null) {
  //     return <div>{currentQuote}</div>;
  //   }
  // getQuote;
  return <div>{currentQuote}</div>;
};

export default Quote;
