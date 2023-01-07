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
      <Flex justify="space-between" alignItems="center" bg={bg} color={color} px={[6, 6, 20, 28, 44]} py={[6, 6, 8, 8, 10]}>
        {colorMode === "light" ? (
          <Image src="/logo_black.png" h={["4rem"]} w="3rem" alt="" />
        ) : (
          <Image src="/logo_white.png" h={["4rem"]} w="3rem" alt="" />
        )}
        <Flex gap={12}>
          <Flex gap={8} display={["none", "none", "flex", "flex", "flex"]}>
            {navigationLinks.map(({path, name, target}) => (
              <Box key={name}>
                <Link to={path}>
                  {name}
                </Link>
              </Box>
            ))}
          </Flex>
          <Box display={["none", "none", "flex", "flex", "flex"]}>
            <Switch size="md" colorScheme="blackAlpha" onChange={toggleColorMode} />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
