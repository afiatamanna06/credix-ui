import { Box, Flex } from "@chakra-ui/react";

interface propTypes {
  heading: string;
  subHeading?: string;
  description: string;
  link?: string;
  buttonText?: string;
}

const AboutSectionCard = ({
  heading,
  subHeading,
  description,
  link,
  buttonText,
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
    </Flex>
  );
};

export default AboutSectionCard;
