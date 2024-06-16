import {
  Button,
  Circle,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MatchTemplate = ({ match }) => {
  console.log(match.matchPerKill);
  return (
    <Stack padding={"22px"} fontWeight={"600"} color={"black"}>
      <HStack gap={"20px"} alignItems={"center"}>
        <Circle h="70px" w="70px" border={"1px solid black"}></Circle>
        <Stack>
          <Heading fontSize={"20px"} color={"#515151"}>
            {match.matchTitle}
          </Heading>
          <Text color={"gray"} fontSize={["14px", "14px", "18px"]}>
            Time: 25/06/204 at 08:00 PM
          </Text>
        </Stack>
      </HStack>
      <HStack w={"100%"}>
        <SimpleGrid
          columns={3}
          w={"100%"}
          textAlign={"center"}
          fontSize={["14px", "14px", "18px"]}
        >
          <GridItem colSpan={1}>
            <Text color={"gray"}>PRIZE POOL</Text>
            <Text fontWeight={700}>{match.matchPricePool}</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text color={"gray"}>PER KILL</Text>
            <Text fontWeight={700}>1</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text color={"gray"}>PLAY FOR</Text>
            <Text color={"green"} fontWeight={700}>
              FREE
            </Text>
          </GridItem>
        </SimpleGrid>
      </HStack>
      <HStack w={"100%"}>
        <SimpleGrid
          columns={3}
          w={"100%"}
          textAlign={"center"}
          fontSize={["14px", "14px", "18px"]}
        >
          <GridItem colSpan={1}>
            <Text color={"gray"}>TYPE</Text>
            <Text fontWeight={700}>{match.matchType}</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text color={"gray"}>VERSION</Text>
            <Text fontWeight={700}>{match.matchVersion}</Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text color={"gray"}>MAP</Text>
            <Text fontWeight={700}>Erangle</Text>
          </GridItem>
        </SimpleGrid>
      </HStack>
      <Button
        variant={"none"}
        border={"2px solid teal"}
        color={"black"}
        bg={"teal.300"}
        _hover={{ bg: "green", color: "white" }}
        w={"100%"}
        fontWeight={700}
      >
        JOINE MATCH
      </Button>
    </Stack>
  );
};

export default MatchTemplate;
