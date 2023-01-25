import { Flex, useColorModeValue } from "@chakra-ui/react";
import CoreTeamCard from "./CoreTeamCard";
import { coreTeamCardData } from "./CoreTeamCardData";

function CoreTeamSection() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column", "column", "column", "row", "row"]}
      color={color}
      gap={[8]}
      py={[8, 8, 20, 24]}
      justify="space-between"
    >
      <Flex
        direction={["column", "column", "column", "row", "row"]}
        gap={[4, 4, 4, 12, 14]}
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

export default CoreTeamSection;
