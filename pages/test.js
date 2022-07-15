import { Box } from "@chakra-ui/react";
import { Card } from "../components/card.js";

const test = () => {
  return (
    <Box h="75vh" w="120vh" bg="#F4F4F7" p="2rem">
      <Box display={"flex"} justifyContent="space-evenly" mb="2rem">
        <Card text="Total Earning" title="$812,168.21" />
        <Card text="Total visitors" title="120,623,127" />
        <Card text="Total orders" title="78,722" />
      </Box>
      <Box display={"flex"} justifyContent="space-evenly" mb="2rem">
        <Card text="Total Earning" title="$812,168.21" />
        <Card text="Total visitors" title="120,623,127" />
        <Card text="Total orders" title="78,722" />
      </Box>
      <Box display={"flex"} justifyContent="space-evenly" mb="2rem">
        <Card text="Total Earning" title="$812,168.21" />
        <Card text="Total visitors" title="120,623,127" />
        <Card text="Total orders" title="78,722" />
      </Box>
    </Box>
  );
};

export default test;
