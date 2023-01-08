import {
  Box,
  Button,
  Image,
  Flex,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { navigationLinks } from "./NavigationBarLinks";
import NavigationMarquee from "./NavigationMarquee";

function NavigationBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex direction="column" fontFamily="'IBM Plex Mono', monospace">
      <NavigationMarquee />
      <Flex
        justify="space-between"
        alignItems="center"
        bg={bg}
        color={color}
        px={[6, 6, 8, 28, 44]}
        py={[6, 6, 8, 8, 10]}
      >
        <Box>
          <Link to="/">
            {colorMode === "light" ? (
              <Image src="/logo_black.png" h={["4rem"]} w="3rem" alt="" />
            ) : (
              <Image src="/logo_white.png" h={["4rem"]} w="3rem" alt="" />
            )}
          </Link>
        </Box>
        <Flex gap={[12, 14, 20]} alignItems="center">
          <Flex gap={8} display={["none", "none", "flex", "flex", "flex"]}>
            {navigationLinks.map(({ path, name, target }) => (
              <Box key={name}>
                <Link to={path}>{name}</Link>
              </Box>
            ))}
          </Flex>
          <Flex
            display={["none", "none", "flex", "flex", "flex"]}
            alignItems="center"
            gap={8}
          >
            <Box>
              <Button
                bg={color}
                color={bg}
                border="1px"
                borderColor={color}
                borderRadius="4px"
                fontSize="xs"
                fontWeight="semibold"
                px={12}
                py={6}
                _hover={{
                  bg: bg,
                  color: color,
                }}
              >
                Invest
              </Button>
            </Box>
            <Box>
              <Switch
                size="md"
                colorScheme="blackAlpha"
                onChange={toggleColorMode}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
