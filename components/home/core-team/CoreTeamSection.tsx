import { Flex, useColorModeValue } from "@chakra-ui/react";
import CoreTeamDescription from "./CoreTeamDescription";

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
      <CoreTeamDescription />
    </Flex>
  );
}

export default CoreTeamSection;
