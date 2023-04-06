import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonButton from "components/common/CommonButton";
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
      direction={["column"]}
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
          <CommonCard
            key={title}
            title={title}
            data={data}
            border="#0046fa"
            borderHeight=".50rem"
          />
        ))}
      </Flex>
      <Box mt="12">
        <a
          href="https://credix-finance.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CommonButton
            bg={color}
            color={bg}
            borderColor={color}
            name="Launch App"
            hoverBg={bg}
            hoverColor={color}
            width={["full", "full", "full", "17rem"]}
          />
        </a>
      </Box>
      <a href={"https://docs.credix.finance/"} target="_blank" rel="noreferrer">
        <Flex
          direction="column"
          textDecoration="underline"
        >{`Read our documentation ->`}</Flex>
      </a>
    </Flex>
  );
};

export default AboutSection;
