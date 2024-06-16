import {
  HStack,
  Text,
  VStack,
  Box,
  Heading,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Bgmi = () => {
  const navigate = useNavigate();
  return (
    <Box
      minH={"100vh"}
      padding={"10vh 0"}
      bg={"rgb(20, 20, 22)"}
      color={"white"}
    >
      <Box padding={"10px"}>
        <SimpleGrid columns={3} borderBottom={"2px solid rgb(24, 29, 24)"}>
          <GridItem colSpan={1}>
            <VStack
              onClick={() => navigate("/user/bgmi/ongoing")}
              _hover={{ borderBottom: "2px solid white" }}
            >
              <Box fontSize={"25px"}>
                <i className="ri-timer-line"></i>
              </Box>
              <Text>ONGOING</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack
              onClick={() => navigate("/user/bgmi/upcomming")}
              _hover={{ borderBottom: "2px solid white" }}
            >
              <Box fontSize={"25px"}>
                <i className="ri-discord-line"></i>
              </Box>
              <Text>UPCOMMING</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack
              onClick={() => navigate("/user/bgmi/results")}
              _hover={{ borderBottom: "2px solid white" }}
            >
              <Box fontSize={"25px"}>
                <i className="ri-slideshow-line"></i>
              </Box>
              <Text>RESULTS</Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box padding={["0 15px", "0 15px", "0 20px", "0 10vw"]}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Bgmi;
