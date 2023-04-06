import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonBecomePart from "components/common/CommonBecomePart";
import AboutSection from "components/investors/about/AboutSection";
import InvestorsSection from "components/investors/investors-name/InvestorsSection";
import LandingSection from "components/investors/landing-section/LandingSection";

const Investors = () => {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex direction="column" minH="100vh" overflow="hidden" bg={bg} color={color}>
      <LandingSection />
      <AboutSection />
      <InvestorsSection />
      <CommonBecomePart
        title="Invest in the future of credit markets"
        buttonText="Onboard as an investor"
        border="#0046fa"
        borderHeight=".50rem"
      />
    </Flex>
  );
};

export default Investors;
