import {
  Box,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { bottomFooterLinks } from "./FooterLinks";

function FooterWeb() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      direction={["column", "column", "column", "row", "row"]}
      border="1px"
      w="full"
      fontFamily="'IBM Plex Mono', monospace"
      bg={bg}
      color={color}
      display={["none", "none", "none", "flex"]}
    >
      <Flex direction="column" justify="space-between" p="5" gap={6}>
        <Box>
          {colorMode === "light" ? (
            <Image src="/logo_black.png" h={["4rem"]} w="3rem" alt="" />
          ) : (
            <Image src="/logo_white.png" h={["4rem"]} w="3rem" alt="" />
          )}
        </Box>
        <Flex gap={2}>
          {bottomFooterLinks.map(({ path, name, target }) => (
            <Box key={name} fontSize="xs">
              {target ? (
                <a href={path} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ) : (
                <Link to={path}>{name}</Link>
              )}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FooterWeb;
