import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const ContestsMenu = ({ available, gameImgSrc, gameName }) => {
  return (
    <Box
      width={"100%"}
      position={"relative"}
      border={"2px solid #595959"}
      borderRadius={"10px"}
      overflow={"hidden"}
      height={["150px", "150px", "300px"]}
      background={"white"}
    >
      <Box
        display={available !== "yes" ? "block" : "none"}
        width={"100%"}
        height={"100%"}
        position={"absolute"}
        bg={"gray"}
        opacity={"0.9"}
        textAlign={"center"}
        alignContent={"center"}
        fontWeight={700}
        fontSize={["16px", "16px", "20px"]}
      >
        Comming Soon...
      </Box>
      <Image
        h={["110px", "110px", "250px"]}
        width={"100%"}
        src={`assets/${gameImgSrc}`}
      />
      <Box
        h={["calc(100% - 110px)", "calc(100% - 110px)", "calc(100% - 250px)"]}
      >
        <Text
          h={"100%"}
          textAlign={"center"}
          alignContent={"center"}
          fontWeight={600}
        >
          {gameName}
        </Text>
      </Box>
    </Box>
  );
};

export default ContestsMenu;
