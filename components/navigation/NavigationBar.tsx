import {
  Box,
  Button,
  Image,
  Flex,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import LogoBlack from "../../public/logo_black.svg"
import LogoWhite from "../../public/logo_white.svg"
import NavigationMarquee from "./NavigationMarquee";

function NavigationBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("white", "black");

  return (
    <Flex direction="column" fontFamily="'IBM Plex Mono', monospace">
      <NavigationMarquee />
      <Flex justify="space-between" alignItems="center" bg={bg} color={color}>
        {colorMode === "light" ? (
          <Image src="/logo_black.png" alt="" />
        ) : (
          <Image src="/logo_white.png" alt="" />
        )}
        <Box>
          <Switch size="md" onChange={toggleColorMode} />
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavigationBar;
