import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonButton from "components/common/CommonButton";

function LandingSectionDescription() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex direction="column" bg={bg} color={color} gap={6} fontFamily="'IBM Plex Mono', monospace">
      <Box
        fontSize={["4xl", "4xl", "6xl", "6xl"]}
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
      >
        Credit investing
      </Box>
      <Box
        fontSize={["4xl", "4xl", "6xl", "6xl"]}
        fontWeight="bold"
        mt="-12"
        fontFamily="'Poppins', sans-serif"
      >
        made global
      </Box>
      <Box
        fontSize={["md"]}
        mt="-6"
      >
        Building the future of global credit markets
      </Box>
      <Box>
        <CommonButton
          bg={color}
          color={bg}
          borderColor={color}
          name="Investment opportunities"
          hoverBg={bg}
          hoverColor={color}
        />
      </Box>
    </Flex>
  );
}

export default LandingSectionDescription;
