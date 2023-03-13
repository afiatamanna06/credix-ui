import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonButton from "./CommonButton";

interface propTypes {
  title: string;
  buttonText: string;
  border: string;
  borderHeight?: string | number;
  borderWidth?: string | number;
}

const CommonBecomePart = ({ title, buttonText, border, borderHeight = 1, borderWidth = "4.5rem" }: propTypes) => {
  const bg = useColorModeValue("black", "#f6f6f6");
  const color = useColorModeValue("white", "black");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column", "column", "column", "row", "row"]}
      color={color}
      gap={[8]}
      py="12"
      width="full"
      justify={["start", "start", "start", "space-between"]}
      alignItems={["start"]}
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Flex direction={"column"}>
        <Box w={borderWidth} h={borderHeight} backgroundColor={border}></Box>
        <Box
          fontSize={["2xl", "2xl", "3xl", "3xl"]}
          fontWeight="bold"
          fontFamily="'Poppins', sans-serif"
        >
          {title}
        </Box>
      </Flex>
      <CommonButton
        bg={color}
        color={bg}
        borderColor={color}
        name={buttonText}
        hoverBg={bg}
        hoverColor={color}
        width={["full", "full", "full", "min-content"]}
      />
    </Flex>
  );
};

export default CommonBecomePart;
