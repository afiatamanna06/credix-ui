import {
  Box,
  Button,
  Image,
  Flex,
  Switch,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import NavigationBarDrawer from "./NavigationBarDrawer";
import { navigationLinks } from "./NavigationBarLinks";
import NavigationMarquee from "./NavigationMarquee";

function NavigationBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Box
            p="2"
            display={["block", "block", "none", "none", "none"]}
            onClick={onOpen}
            cursor="pointer"
          >
            <i className="ri-menu-line ri-lg"></i>
          </Box>
          <Drawer size="full" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay
              display={["block", "block", "none", "none", "none"]}
            />
            <DrawerContent
              display={["block", "block", "none", "none", "none"]}
              bg={bg}
              color={color}
            >
              <DrawerHeader>
                <NavigationBarDrawer onDrawerClose={onClose} />
              </DrawerHeader>
              <DrawerFooter borderTopWidth="1px">
                <Flex justify="center" w="full" onClick={onClose}>
                  <i className="ri-close-line ri-lg"></i>
                </Flex>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
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
