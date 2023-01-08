import { Box } from "@chakra-ui/react";

function HomeAuroraSection() {
  return (
    <Box
      maxW={["15rem", "15rem", "25rem", "25rem"]}
      minH={["15rem", "15rem", "25rem", "25rem"]}
      w="100%"
      position="relative"
      overflow="hidden"
      zIndex={2}
    >
      <Box
        bg="rgb(0, 0, 255)"
        h="20rem"
        w="20rem"
        zIndex={0}
        rounded="full"
        position="absolute"
        top="-20%"
        left="-20%"
      ></Box>
      <Box
        bg="rgb(0, 51, 0)"
        h="20rem"
        w="20rem"
        zIndex={0}
        rounded="full"
        position="absolute"
        top="30%"
        left="-20%"
      ></Box>
      <Box
        bg="rgb(255, 0, 0)"
        h="20rem"
        w="20rem"
        zIndex={0}
        rounded="full"
        position="absolute"
        top="-20%"
        left="30%"
      ></Box>
      <Box
        bg="rgb(255, 235, 0)"
        h="20rem"
        w="20rem"
        zIndex={0}
        rounded="full"
        position="absolute"
        top="40%"
        left="40%"
      ></Box>
      <Box
        w="full"
        h="full"
        backdropFilter="blur(100px)"
        position="relative"
        zIndex={2}
      ></Box>
    </Box>
  );
}

export default HomeAuroraSection;
