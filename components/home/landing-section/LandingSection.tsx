import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import HomeAuroraSection from "./HomeAuroraSection";
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
      gap={[8]}
      minH={["80vh", "80vh", "80vh", "100vh"]}
      py={[8, 8, 20, 24]}
      justify={["start", "start", "start", "space-between"]}
    >
      <Box display={["block", "block", "block", "none", "none"]}>
        <HomeAuroraSection />
      </Box>
      <LandingSectionDescription />
      <Box display={["none", "none", "none", "block"]}>
        <HomeAuroraSection />
      </Box>
    </Flex>
  );
}

export default LandingSection;
