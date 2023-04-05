import { Flex } from "@chakra-ui/react";
import React from "react";
import AboutSectionCard from "./AboutSectionCard";
import { aboutSectionData } from "./AboutSectionData";

interface propTypes {
  bg: string;
  color: string;
}

const AboutWebSection = ({ bg, color }: propTypes) => {
  return (
    <Flex
      display={["none", "none", "none", "flex", "flex"]}
      mx={[6, 6, 8, 28, 44]}
      mt={["5rem"]}
      mb={[8]}
      direction={["row"]}
      justify="space-between"
      alignItems="center"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Flex direction="column" gap={40}>
        {aboutSectionData.map(
          ({ heading, subHeading, description, link, buttonText }) => (
            <AboutSectionCard
              key={heading}
              heading={heading}
              description={description}
              subHeading={subHeading}
              link={link}
              buttonText={buttonText}
              background={bg}
              color={color}
            />
          )
        )}
      </Flex>
    </Flex>
  );
};

export default AboutWebSection;
