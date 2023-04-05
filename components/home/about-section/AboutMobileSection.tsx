import { Flex } from "@chakra-ui/react";
import AboutSectionCard from "./AboutSectionCard";
import { aboutSectionData } from "./AboutSectionData";

interface propTypes {
  bg: string;
  color: string;
}

const AboutMobileSection = ({ bg, color }: propTypes) => {
  return (
    <Flex
      display={["flex", "flex", "flex", "none"]}
      mx={[6, 6, 8, 28, 44]}
      mt={["5rem"]}
      mb={[20]}
      direction={["column"]}
      alignItems="center"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Flex direction="column" gap={16}>
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

export default AboutMobileSection;
