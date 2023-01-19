import { Flex, useColorModeValue } from "@chakra-ui/react";
import HomeAuroraSection from "./HomeAuroraSection";
import LandingSectionDescription from "./LandingSectionDescription";

function LandingSection() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex bg={bg} direction={["column", "column", "column", "row", "row"]} color={color} py={[8, 8, 20, 24]} justify="space-between">
      <LandingSectionDescription />
      <HomeAuroraSection />
    </Flex>
  );
}

export default LandingSection;
