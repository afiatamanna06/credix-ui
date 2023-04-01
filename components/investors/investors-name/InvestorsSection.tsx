import {
  Box,
  Flex,
  useColorModeValue,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { investorsData, investorsLightData } from "./InvestorsImages";

const InvestorsSection = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");

  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column"]}
      color={color}
      w="full"
      gap={[14, 14]}
      py={[16, 16, 20, 24]}
      justify="space-between"
    >
      <Box
        fontSize={["2xl", "2xl", "3xl", "3xl"]}
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
      >
        Investors
      </Box>
      <Flex
        wrap="wrap"
        w="full"
        alignItems={["center", "center", "center", "start"]}
        gap={[14, 14, 14, 20]}
        direction={["column", "column", "column", "row"]}
      >
        {colorMode === "light"
          ? investorsLightData.map(({ image }: { image: string }) => (
              <Image
                flex="1"
                key={image}
                src={image}
                w="100%"
                h="100%"
                maxW={["10rem", "10rem", "10rem", "15rem"]}
                maxH={["6rem", "6rem", "6rem", "4rem"]}
                alt=""
              />
            ))
          : investorsData.map(({ image }: { image: string }) => (
              <Image
                flex="1"
                key={image}
                src={image}
                w="100%"
                h="100%"
                maxW={["10rem", "10rem", "10rem", "15rem"]}
                maxH={["6rem", "6rem", "6rem", "4rem"]}
                alt=""
              />
            ))}
      </Flex>
    </Flex>
  );
};

export default InvestorsSection;
