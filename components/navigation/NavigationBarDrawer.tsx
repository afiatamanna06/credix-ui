import {
  Box,
  Flex,
  Switch,
  useColorMode,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useLocation } from "@remix-run/react";
import { navigationLinks } from "./NavigationBarLinks";

interface propTypes {
  onDrawerClose: any;
}

function NavigationBarDrawer({ onDrawerClose }: propTypes) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#f6f6f6", "black");
  const matches = useLocation();
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      direction="column"
      w="full"
      bg={bg}
      color={color}
      gap={6}
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Flex justify="space-between" alignItems="center">
        <Box onClick={onDrawerClose}>
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
              onChange={() => {
                toggleColorMode();
                onDrawerClose();
              }}
            />
          </Box>
          <Flex justify="center" w="full" onClick={onDrawerClose}>
            <i className="ri-close-line ri-2x"></i>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap={4}>
        {navigationLinks.map(({ path, name, target }) => (
          <Box
            key={name}
            fontWeight="normal"
            fontSize="md"
            onClick={onDrawerClose}
          >
            {target ? (
              <a href={path} target="_blank" rel="noreferrer">
                <Flex direction="column">{name}</Flex>
              </a>
            ) : (
              <Link to={path}>
                <Flex direction="column">{name}</Flex>
              </Link>
            )}
          </Box>
        ))}
      </Flex>
      <Box w="full" mt="12" onClick={onDrawerClose}>
        <a
          href="https://credix-finance.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
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
        </a>
      </Box>
    </Flex>
  );
}

export default NavigationBarDrawer;
