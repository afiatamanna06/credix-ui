import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import AuroraSection from "./AuroraSection";
import LandingSectionDescription from "./LandingSectionDescription";

function LandingSection() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column", "column", "column", "row", "row"]}
      color={color}
      minH="90vh"
      gap={[8]}
      py={[8, 8, 20, 24]}
      justify="space-between"
    >
      <Box display={["block", "block", "block", "none", "none"]}>
        <AuroraSection />
      </Box>
      <LandingSectionDescription />
      <Box display={["none", "none", "none", "block"]}>
        <AuroraSection />
      </Box>
    </Flex>
  );
}

export default LandingSection;