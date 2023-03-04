import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonButton from "components/common/CommonButton";

function BecomePartSection() {
  const bg = useColorModeValue("black", "#f6f6f6");
  const color = useColorModeValue("white", "black");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column"]}
      color={color}
      gap={[28, 28, 8, 8]}
      py="12"
      alignItems={["center", "center", "center", "start"]}
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Box
        fontSize={["2xl", "2xl", "3xl", "4xl"]}
        fontWeight="450"
        fontFamily="'Poppins', sans-serif"
        maxWidth={["100%", "100%", "100%", "30rem"]}
      >
        Become part of the future of private credit markets
      </Box>
    </Flex>
  );
}

export default BecomePartSection;
