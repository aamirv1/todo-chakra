import { ChatIcon } from "@chakra-ui/icons";
import { Box, Heading, Icon, Text } from "@chakra-ui/react";

export const Card = ({ text, title }) => {
  return (
    <Box
      transition={"transform 0.25s ease"}
      _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
      bg="white"
      p="1rem"
      w="30vh"
      h={"20vh"}
      borderWidth="1px"
      borderRadius="1rem"
      overflow="hidden"
    >
      <Box display={"flex"}>
        <Text mb="0.5rem" display="inline-block" mr="10rem">
          {text}
        </Text>
        <ChatIcon fontSize={"2xl"} />
      </Box>
      <Heading size="xl">{title}</Heading>
    </Box>
  );
};
