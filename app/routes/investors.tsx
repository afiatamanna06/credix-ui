import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Investors = () => {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex direction="column" minH="100vh" bg={bg} color={color}>
      <Box>Investors</Box>
    </Flex>
  );
};

export default Investors;
