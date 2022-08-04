import { ScriptProps } from "next/script";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Text } from "@chakra-ui/react";

const Quote: React.FC<ScriptProps> = ({ children }) => {
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random", {
        // params: {
        //   author: "Bill Gates",
        // },
      })
      .then((response) => {
        // console.log(response.data.data[0].quoteText);
        // console.log(response.data.data);
        // console.log(response.data.data[0].quoteText);
        setCurrentQuote(response.data.data[0].quoteText);
      });
  }, []);

  if (!currentQuote) {
    return <Text fontSize="3xl">Loading Quote...</Text>;
  }
  
  return <Text fontSize="3xl">{currentQuote}</Text>;
};

export default Quote;
