import { Flex, useColorModeValue } from "@chakra-ui/react";

function BackedbySection() {
  const bg = useColorModeValue("white", "#0b0b0b");
  const color = useColorModeValue("white", "black");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      color={color}
      wrap="wrap"
      gap={[8]}
      py={[8, 8, 20, 24]}
    >
    </Flex>
  );
}

export default BackedbySection;
