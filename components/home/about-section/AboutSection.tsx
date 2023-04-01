import { Flex, useColorModeValue } from "@chakra-ui/react";
import AboutWebSection from "./AboutWebSection";

const AboutSection = () => {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      bg={bg}
      color={color}
    >
        <AboutWebSection />
    </Flex>
  );
};

export default AboutSection;
