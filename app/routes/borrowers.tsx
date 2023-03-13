import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import AboutSection from "components/borrowers/about/AboutSection";
import LandingSection from "components/borrowers/landing-section/LandingSection";
import CommonBecomePart from "components/common/CommonBecomePart";

const Borrowers = () => {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex direction="column" minH="100vh" bg={bg} color={color}>
      <LandingSection />
      <AboutSection />
      <CommonBecomePart
        title="Be part of the journey"
        buttonText="Register as a borrower"
        border="#f8bb00"
        borderHeight=".25rem"
        borderWidth={"5rem"}
      />
    </Flex>
  );
};

export default Borrowers;
