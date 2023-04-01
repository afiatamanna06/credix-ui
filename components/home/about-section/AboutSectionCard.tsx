import { Box, Flex } from "@chakra-ui/react";
import CommonButton from "components/common/CommonButton";

interface propTypes {
  heading: string;
  subHeading?: string;
  description: string;
  link?: string;
  buttonText?: string;
  background?: string;
  color?: string;
}

const AboutSectionCard = ({
  heading,
  subHeading,
  description,
  link,
  buttonText,
  color,
  background,
}: propTypes) => {
  return (
    <Flex direction="column" gap={2}>
      <Box
        fontSize={["2xl", "2xl", "3xl", "4xl"]}
        fontWeight="450"
        fontFamily="'Poppins', sans-serif"
        lineHeight={1}
        maxWidth={["100%", "100%", "100%", "30rem"]}
      >
        {heading}
      </Box>
      <Box w="100rem" h="1" backgroundColor={background}></Box>
      {subHeading && (
        <Box
          maxWidth={["100%", "100%", "100%", "40rem"]}
          fontSize={["sm", "sm", "md", "md"]}
          fontWeight="semibold"
        >
          {subHeading}
        </Box>
      )}
      <Box
        maxWidth={["100%", "100%", "100%", "40rem"]}
        fontSize={["sm", "sm", "md", "md"]}
      >
        {description}
      </Box>
      {link && (
        <a
          href={"https://docs.credix.finance/"}
          target="_blank"
          rel="noreferrer"
        >
          <Flex
            direction="column"
            textDecoration="underline"
          >{`Read our documentation ->`}</Flex>
        </a>
      )}
      {buttonText && (
        <Box>
          <CommonButton
            bg={color}
            color={background}
            borderColor={color}
            name={buttonText}
            hoverBg={background}
            hoverColor={color}
            width={["full", "full", "full", "17rem"]}
          />
        </Box>
      )}
    </Flex>
  );
};

export default AboutSectionCard;
