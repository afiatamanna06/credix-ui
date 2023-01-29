import { Box, Flex, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";

function FooterWeb() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex direction={["column", "column", "column", "row", "row"]} border="1px" w="full" bg={bg} color={color} display={["none", "none", "none", "flex"]}>
      <Flex direction="column" justify="space-between" p="5">
        <Box>
          {colorMode === "light" ? (
            <Image src="/logo_black.png" h={["4rem"]} w="3rem" alt="" />
          ) : (
            <Image src="/logo_white.png" h={["4rem"]} w="3rem" alt="" />
          )}
        </Box>
      </Flex>
    </Flex>
  );
}

export default FooterWeb;
