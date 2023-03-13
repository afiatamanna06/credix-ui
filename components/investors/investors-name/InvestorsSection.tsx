import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const InvestorsSection = () => {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column"]}
      color={color}
      gap={[28, 28, 8, 8]}
      py={[8, 8, 20, 24]}
      justify="space-between"
    >
      <Box
        fontSize={["2xl", "2xl", "3xl", "3xl"]}
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
      >
        Investors
      </Box>
      <Flex wrap="wrap" direction={["column", "column", "column", "row"]}>

      </Flex>
    </Flex>
  );
};

export default InvestorsSection;
