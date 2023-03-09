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
        Invest
      </Box>
      <Box
        fontSize={["4xl", "4xl", "6xl", "7xl"]}
        fontWeight="bold"
        mt={["-4", "-4", "-4", "-12"]}
        fontFamily="'Poppins', sans-serif"
      >
        With Credix
      </Box>
      <Box fontSize={["md"]} mt={[0, 0, 0, "-6"]} maxW="30rem">
        Private debt investments with sustainable, non-crypto correlated returns, backed by real-world assets
      </Box>
      <Box>
        <CommonButton
          bg={color}
          color={bg}
          borderColor={color}
          name="Onboard as an investor"
          hoverBg={bg}
          hoverColor={color}
        />
      </Box>
    </Flex>
  );
}

export default LandingSectionDescription;
