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
      gap={[6]}
      py={["12", "12", "28", "28"]}
      width="full"
      justify={["start", "start", "start", "space-between"]}
      alignItems={["start", "start", "start", "center"]}
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Flex direction={"column"} gap={4}>
        <Box w={borderWidth} h={borderHeight} backgroundColor={border}></Box>
        <Box
          fontSize={["3xl", "3xl", "3xl", "4xl"]}
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
        width={["full", "full", "full", "23rem"]}
      />
    </Flex>
  );
};

export default CommonBecomePart;
