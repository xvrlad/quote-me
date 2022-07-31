import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import DefaultLayout from "../app/common/components/layout/DefaultLayout";
import Quote from "../app/common/components/quote";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Quote />
    </DefaultLayout>
  );
};

export default Home;
