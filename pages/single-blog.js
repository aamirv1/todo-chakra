import { Box, Divider, Heading, Image, Text } from "@chakra-ui/react";
import JsonData from "../components/singleblog.json";

const singleblog = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} my="5%">
        <Image
          width={"full"}
          mx="10%"
          height="612px"
          src={JsonData.feature_image}
        />
      </Box>
      <Box mx="25%">
        <Text display={"inline-block"} size="16px" pb="5%">
          {JsonData.primary_tag ? In : ""}{" "}
        </Text>{" "}
        <Text color="#8169FF" display={"inline-block"}>
          {JsonData.primary_tag ?? ""}
        </Text>
        <Heading fontSize={"42px"} pb="5%">
          {JsonData.title}
        </Heading>
        <Box mb="5%" display={"flex"}>
          <Image
            src={JsonData.primary_author.profile_image}
            width={"45px"}
            height="45px"
            borderRadius={"20px"}
            mr="2%"
          />
          <Box mt="-0.1%">
            <Text opacity={"0.5"} display="inline-block">
              by{" "}
            </Text>{" "}
            <Text display="inline-block"> {JsonData.primary_author.name}</Text>
            <Text>July 6, 2022 . 0 Comments</Text>
          </Box>
        </Box>
        <Box
          fontSize="20px"
          mb="5%"
          dangerouslySetInnerHTML={{ __html: JsonData.html }}
        ></Box>
        <Divider mb="5%" />
      </Box>
    </>
  );
};

export default singleblog;
