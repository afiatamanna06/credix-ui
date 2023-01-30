import {
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { footerLinks } from "./FooterLinks";

function FooterMobile() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      direction={["column", "column", "column"]}
      border="1px"
      w="full"
      fontFamily="'IBM Plex Mono', monospace"
      bg={bg}
      color={color}
      display={["flex", "flex", "flex", "none"]}
    >
      <Flex
        direction="column"
        justify="space-between"
        p="5"
        gap={6}
        borderBottom="1px"
        flex="1"
      >
        <Box>
          {colorMode === "light" ? (
            <Image src="/logo_black.png" h={["4rem"]} w="3rem" alt="" />
          ) : (
            <Image src="/logo_white.png" h={["4rem"]} w="3rem" alt="" />
          )}
        </Box>
        {footerLinks.map(({ path, name, target }) => (
          <Box key={name} _hover={{ fontWeight: "semibold" }}>
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
  );
}

export default FooterMobile;
