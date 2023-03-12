import { Box, Flex } from "@chakra-ui/react";

interface propTypes {
  title: string;
  data: string;
  border: string;
  borderHeight?: string | number;
}

const CommonCard = ({ title, data, border, borderHeight = 1 }: propTypes) => {
  return (
    <Flex direction="column" flex="1" fontFamily="'IBM Plex Mono', monospace" gap={[4]}>
      <Box fontSize="xl" fontWeight="semibold">
        {title}
      </Box>
      <Box w="4.5rem" h={borderHeight} backgroundColor={border}></Box>
      <Box fontSize={["md"]} mt={[2]} maxW="20rem">
        {data}
      </Box>
    </Flex>
  );
};

export default CommonCard;
