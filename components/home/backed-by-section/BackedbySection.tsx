import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { backedbyData } from "./BackedbyData";

function BackedbySection() {
  const bg = useColorModeValue("white", "#0b0b0b");
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      color={color}
      wrap="wrap"
      direction={["column", "row", "row", "row"]}
      fontFamily="'IBM Plex Mono', monospace"
      gap={[8]}
      py={[8, 8, 20, 20]}
    >
      <Box flex="1" fontSize="xl" fontWeight="semibold">Backed by</Box>
      {backedbyData.map(({title, data}) => (
        <Flex flex="1" key={title} direction="column" gap={3}>
          <Box fontWeight="semibold">{title}</Box>
          {data.map((item) => (
            <Box key={item}>{item}</Box>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}

export default BackedbySection;
