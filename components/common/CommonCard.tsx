import { Box, Flex } from "@chakra-ui/react";

interface propTypes {
  title: string;
  data: string;
  border: string;
  borderHeight?: string | number;
}

const CommonCard = ({ title, data, border, borderHeight = 1 }: propTypes) => {
  return (
    <Flex direction="column" fontFamily="'IBM Plex Mono', monospace" gap={[8]}>
      <Box fontSize="xl" fontWeight="semibold">
        {title}
      </Box>
      <Box w="5rem" h={borderHeight} backgroundColor={border}></Box>
      <Box fontSize={["md"]} mt={[0, 0, 0, 0]} maxW="18rem">
        {data}
      </Box>
    </Flex>
  );
};

export default CommonCard;
