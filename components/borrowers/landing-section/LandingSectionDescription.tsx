import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonButton from "components/common/CommonButton";

function LandingSectionDescription() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      direction="column"
      bg={bg}
      color={color}
      gap={6}
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Box
        fontSize={["4xl", "4xl", "6xl", "7xl"]}
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
      >
        Borrow
      </Box>
      <Box
        fontSize={["4xl", "4xl", "6xl", "7xl"]}
        fontWeight="bold"
        mt={["-4", "-4", "-4", "-12"]}
        fontFamily="'Poppins', sans-serif"
      >
        at attractive rates
      </Box>
      <Box fontSize={["md"]} mt={[0, 0, 0, "-6"]} maxW="30rem">
        Get access to better credit with lower cost of capital and shorter lead times
      </Box>
      <Box>
        <CommonButton
          bg={color}
          color={bg}
          borderColor={color}
          name="Register as a borrower"
          hoverBg={bg}
          hoverColor={color}
          width={["full", "full", "full", "min-content"]}
        />
      </Box>
    </Flex>
  );
}

export default LandingSectionDescription;