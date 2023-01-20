import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import BackedbySection from "components/home/backed-by-section/BackedbySection";
import LandingSection from "components/home/landing-section/LandingSection";

export default function Index() {

  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  
  return (
    <div>
      <Flex direction="column" minH="100vh" bg={bg} color={color}>
        <LandingSection />
        <BackedbySection />
      </Flex>
    </div>
  );
}
