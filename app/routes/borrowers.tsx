import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import LandingSection from "components/borrowers/landing-section/LandingSection";

const Borrowers = () => {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex direction="column" minH="100vh" bg={bg} color={color}>
      <LandingSection />
    </Flex>
  );
};

export default Borrowers;
