import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Circle,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import banner from "../baner.json";
import NotifyMessageComponent from "../Components/NotifyMessageComponent";
import games from "../../game.json";
import ContestsMenu from "../Components/ContestsMenu";
import { useNavigate } from "react-router-dom";
export { keyframes } from "@emotion/react";
const PlayPage = () => {
  const navigate = useNavigate();
  const bannerLength = banner.length;

  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setBannerIndex((prevBannerIndex) =>
        prevBannerIndex === bannerLength - 1 ? 0 : prevBannerIndex + 1
      );
    }, 2500);
    return () => {};
  }, [bannerIndex]);

  return (
    <Box
      padding={[
        "13vh 10px 20px 10px",
        "15vh 10px 20px 10px",
        "15vh 10px 20px 10px",
        "15vh 30vh 20px 30vh",
      ]}
      bg={"#2b3839"}
      minH={"100vh"}
    >
      <NotifyMessageComponent />
      <Box margin={"20px 0"} overflow={"hidden"} width={"100%"}>
        <Box
          width={"100%"}
          whiteSpace={"nowrap"}
          transition={"ease 1500ms"}
          style={{ transform: `translate3d(${-bannerIndex * 100}%, 0, 0)` }}
        >
          {banner.map((banImg, index) => (
            <Box
              h={["10rem", "10rem", "20rem"]}
              w={"100%"}
              key={index}
              display={"inline-block"}
              bgImage={`url(assets/${banImg.banner})`}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
            ></Box>
          ))}
        </Box>
      </Box>
      <Heading
        textTransform={"uppercase"}
        margin={"20px 0"}
        color={"white"}
        fontSize={["23px", "25px", "37px", "32px"]}
      >
        Contests & Tornaments
      </Heading>
      <Box>
        <SimpleGrid columns={[3]} rowGap={1} columnGap={[2, 2, 5]}>
          {games.map((item) => (
            <GridItem onClick={() => navigate("/user/bgmi")} key={item.id}>
              <ContestsMenu
                available={item.available}
                gameImgSrc={item.gameImgSrc}
                gameName={item.gameName}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
      <Heading
        margin={"20px 0"}
        textTransform={"uppercase"}
        color={"white"}
        fontSize={["23px", "25px", "37px", "32px"]}
      >
        Upcoming Tornaments
      </Heading>
      <Box>
        <Box>
          <Image />
          <Stack>
            <Text></Text>
            <HStack></HStack>
            <HStack></HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PlayPage;
