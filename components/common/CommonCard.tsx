import { Box, Flex } from "@chakra-ui/react";

interface propTypes {
  title: string;
  data: string;
  border: string;
  borderHeight?: string | number;
  borderWidth?: string | number;
  width?: string | number;
}

const CommonCard = ({ title, data, border, borderHeight = 1, borderWidth = "4.5rem", width = "20rem" }: propTypes) => {
  return (
    <Flex direction="column" flex="1" fontFamily="'IBM Plex Mono', monospace" gap={[4]}>
      <Box fontSize="xl" fontWeight="semibold">
        {title}
      </Box>
      <Box w={borderWidth} h={borderHeight} backgroundColor={border}></Box>
      <Box fontSize={["md"]} mt={[2]} maxW={width}>
        {data}
      </Box>
    </Flex>
  );
};

export default CommonCard;
