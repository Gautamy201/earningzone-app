import { Box, GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MatchTemplate from "../Components/MatchTemplate";
import axios from "axios";
const Upcomming = () => {
  const [matches, setMatches] = useState([]);
  const [loder, setLoder] = useState(false);
  const [error, setError] = useState(false);

  const fetchMatchesData = async () => {
    setLoder(true);
    const res = await axios.get("https://earningzone-api.onrender.com/matches");
    const matches = res.data.matches;
    setMatches(matches);
    setLoder(false);
  };
  useEffect(() => {
    fetchMatchesData();
  }, []);
  console.log(matches);
  return (
    <Box>
      {loder ? (
        <Box minH={"60vh"} textAlign={"center"} alignContent={"center"}>
          <Spinner />
        </Box>
      ) : (
        <SimpleGrid columns={[1, 1, 2, 3]} rowGap={3} columnGap={3}>
          {matches.map((match) => (
            <GridItem
              colSpan1
              key={match._id}
              colSpan={1}
              bg={"white"}
              borderRadius={"10px"}
              w={"100%"}
              border={"2px solid teal"}
            >
              <MatchTemplate match={match} />
            </GridItem>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Upcomming;
