import { Box, Flex } from "@chakra-ui/react";
import CoreTeamCard from "./CoreTeamCard";
import { coreTeamCardData } from "./CoreTeamCardData";

function CoreTeamDescription() {
  return (
    <Flex direction="column" gap={[8, 8, 8, 14]}>
      <Box
        fontSize={["2xl", "2xl", "3xl", "3xl"]}
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
      >
        The core team
      </Box>
      <Flex
        direction={["column", "column", "column", "row", "row"]}
        gap={[8, 8, 8, 12, 14]}
      >
        {coreTeamCardData.map(
          ({ name, image, position, linkedinUrl, twitterUrl }) => (
            <CoreTeamCard
              key={name}
              name={name}
              image={image}
              position={position}
              linkedinUrl={linkedinUrl}
              twitterUrl={twitterUrl}
            />
          )
        )}
      </Flex>
    </Flex>
  );
}

export default CoreTeamDescription;
