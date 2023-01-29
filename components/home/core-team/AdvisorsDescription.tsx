import { Box, Flex } from "@chakra-ui/react";
import { advisorData } from "./AdvisorData";

function AdvisorsDescription() {
  return (
    <Flex direction="column" gap={[8, 8, 8, 14]} minW={["100%", "100%", "100%", "30rem"]}>
      <Box
        fontSize={["2xl", "2xl", "3xl", "3xl"]}
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
      >
        Our advisors
      </Box>
      <Flex
        direction="column"
        fontFamily="'IBM Plex Mono', monospace"
        fontWeight="semibold"
        gap={2}
      >
        {advisorData.map(({ name, position1, position2 }) => (
          <Flex direction="column" key={name} gap={2}>
            <Box>{name}</Box>
            <Flex
              direction="column"
              color="rgba(240, 240, 240, .7)"
              fontSize="sm"
            >
              <Box>{position1}</Box>
              <Box>{position2}</Box>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default AdvisorsDescription;
