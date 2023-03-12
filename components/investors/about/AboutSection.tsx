import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonCard from "components/common/CommonCard";
import { aboutData } from "./AboutSectionData";

const AboutSection = () => {
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
      w="full"
      py={[8, 8, 20, 20]}
    >
      <Flex
        direction={["column", "column", "column", "row"]}
        gap={[8]}
        w="full"
      >
        {aboutData.map(({ title, data }) => (
          <CommonCard key={title} title={title} data={data} border="#0046fa" borderHeight=".50rem" />
        ))}
      </Flex>
    </Flex>
  );
};

export default AboutSection;
