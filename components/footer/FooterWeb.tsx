import {
  Box,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import MediumLight from "../../public/medium_light.png";
import MediumDark from "../../public/medium.png";
import { bottomFooterLinks, footerLinks } from "./FooterLinks";

function FooterWeb() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      direction={["column", "column", "column", "row", "row"]}
      border="1px"
      w="full"
      minH="18rem"
      fontFamily="'IBM Plex Mono', monospace"
      bg={bg}
      color={color}
      display={["none", "none", "none", "flex"]}
    >
      <Flex direction="column" justify="space-between" p="5" gap={6} flex="1">
        <Box>
          {colorMode === "light" ? (
            <Image src="/logo_black.png" h={["4rem"]} w="3rem" alt="" />
          ) : (
            <Image src="/logo_white.png" h={["4rem"]} w="3rem" alt="" />
          )}
        </Box>
        <Flex gap={4}>
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
      <Flex direction="column" p="5" gap={6} flex="1">
        {footerLinks.map(({ path, name, target }) => (
          <Box key={name} fontSize="sm">
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
      <Flex direction="column" justify="space-between" p="5" gap={6} flex="1">
        <Flex direction="column" gap={4}>
          <Box>Find us on:</Box>
          <Flex gap={2}>
            <a
              href="https://www.linkedin.com/company/credix-finance/"
              target="_blank"
              rel="noreferrer"
            >
              <Box>
                <i className="ri-linkedin-box-fill ri-2x"></i>
              </Box>
            </a>
            <a
              href="https://link.medium.com/n7tpQNpZyqb"
              target="_blank"
              rel="noreferrer"
            >
              <Box>
                <i className="ri-medium-fill ri-2x"></i>
              </Box>
            </a>
            <a
              href="https://twitter.com/Credix_finance?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noreferrer"
            >
              <Box>
                <i className="ri-twitter-fill ri-2x"></i>
              </Box>
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FooterWeb;
