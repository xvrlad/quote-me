import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ScriptProps } from "next/script";

const DefaultLayout: React.FC<ScriptProps> = ({ children }) => {
  return (
    <Flex bg="lightblue" height="100vh">
      {children}
    </Flex>
  );
};

export default DefaultLayout;
