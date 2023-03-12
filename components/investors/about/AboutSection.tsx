import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const AboutSection = () => {
  const bg = useColorModeValue("white", "#0b0b0b");
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      color={color}
      wrap="wrap"
      direction={["column", "row", "row", "row"]}
      fontFamily="'IBM Plex Mono', monospace"
      gap={[8]}
      py={[8, 8, 20, 20]}
    >
      
    </Flex>
  );
};

export default AboutSection;
