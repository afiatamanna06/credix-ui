import {
  Box,
  Flex,
  Switch,
  useColorMode,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { navigationLinks } from "./NavigationBarLinks";

interface propTypes {
  onDrawerClose: any;
}

function NavigationBarDrawer({ onDrawerClose }: propTypes) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex direction="column" w="full" bg={bg} color={color} fontFamily="'IBM Plex Mono', monospace">
      <Flex justify="space-between" alignItems="center">
        <Box>
          <Link to="/">
            {colorMode === "light" ? (
              <Image src="/logo_black.png" h={["2.5rem"]} w="1.8rem" alt="" />
            ) : (
              <Image src="/logo_white.png" h={["2.5rem"]} w="1.8rem" alt="" />
            )}
          </Link>
        </Box>
        <Flex alignItems="center" gap={6}>
          <Box>
            <Switch
              size="md"
              colorScheme="blackAlpha"
              onChange={toggleColorMode}
            />
          </Box>
          <Flex justify="center" w="full" onClick={onDrawerClose}>
            <i className="ri-close-line ri-2x"></i>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column">
        {navigationLinks.map(({ path, name, target }) => (
          <Box key={name} fontWeight="normal" fontSize="md">
            <Link to={path}>{name}</Link>
          </Box>
        ))}
      </Flex>
      <Box w="full">
        <Button
          bg={color}
          color={bg}
          border="1px"
          w="full"
          borderColor={color}
          borderRadius="4px"
          fontSize="sm"
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
    </Flex>
  );
}

export default NavigationBarDrawer;
