import { Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";
import LandingSectionDescription from "./LandingSectionDescription";

function LandingSection() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column", "column", "column", "row", "row"]}
      color={color}
      minH={["90vh"]}
      gap={[8]}
      position="relative"
      py={[8, 8, 20, 24]}
    >
      <LandingSectionDescription />
      <Image
        position={["absolute"]}
        left={["18rem", "18rem", "24rem", "1000"]}
        top={["400", "400", "500", "200"]}
        src={"/investors_dark.webp"}
        w={["11rem", "11rem", "17rem", "21rem"]}
        h={["15rem", "15rem", "23rem", "29rem"]}
        alt=""
      />
    </Flex>
  );
}

export default LandingSection;
