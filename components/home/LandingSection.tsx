import { Flex, useColorModeValue } from "@chakra-ui/react";
import HomeAuroraSection from "./HomeAuroraSection";

function LandingSection() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex bg={bg} color={color}>
      <HomeAuroraSection />
    </Flex>
  );
}

export default LandingSection;
