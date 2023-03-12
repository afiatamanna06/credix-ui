import { Box, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";

const gradient = keyframes`
    from { transform: scale(1) translate(0px); }
    to { transform: scale(1.8) translate(60px); }
  `;

function AuroraSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${gradient} infinite 4s`;

  return (
    <Box
      w={["full", "full", "28rem", "28rem"]}
      minH={["15rem", "15rem", "22rem", "22rem"]}
      position="relative"
      overflow="hidden"
      zIndex={10}
    >
      <Box
        bg="#ff9999"
        h="10rem"
        w="10rem"
        zIndex={1}
        rounded="full"
        position="absolute"
        animation={animation}
        top="-30%"
        left="-20%"
      ></Box>
      <Box
        bg="rgb(255, 0, 0)"
        h="20rem"
        w="20rem"
        zIndex={0}
        rounded="full"
        position="absolute"
        animation={animation}
        sx={{
            animationDelay: "2s",
        }}
        top="30%"
        left="-20%"
      ></Box>
      <Box
        bg="#ff9999"
        h="20rem"
        w="20rem"
        zIndex={0}
        rounded="full"
        animation={animation}
        sx={{
            animationDelay: "3s",
        }}
        position="absolute"
        top="-20%"
        left="30%"
      ></Box>
      <Box
        bg="rgb(255, 235, 0)"
        h="15rem"
        w="15rem"
        zIndex={2}
        animation={animation}
        sx={{
            animationDelay: "4s",
        }}
        rounded="full"
        position="absolute"
        top="40%"
        left="40%"
      ></Box>
      <Box
        w="full"
        h={["15rem", "15rem", "22rem", "22rem"]}
        backdropFilter="blur(100px)"
        position="relative"
        zIndex={10}
      ></Box>
    </Box>
  );
}

export default AuroraSection;