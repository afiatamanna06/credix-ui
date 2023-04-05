import { Flex, useColorModeValue } from "@chakra-ui/react";
import AboutMobileSection from "./AboutMobileSection";
import AboutWebSection from "./AboutWebSection";

const AboutSection = () => {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      bg={bg}
      color={color}
    >
        <AboutWebSection bg={bg} color={color} />
        <AboutMobileSection bg={bg} color={color} />
    </Flex>
  );
};

export default AboutSection;
