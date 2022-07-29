import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ScriptProps } from "next/script";

const DefaultLayout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <Flex
      bg="lightblue"
      height="50vh"
      width="auto"
      dir="column"
      p="10"
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
};

export default DefaultLayout;
