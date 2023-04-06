import { Flex } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import AboutImagesSection from "./AboutImagesSection";
import AboutSectionCard from "./AboutSectionCard";
import { aboutSectionData } from "./AboutSectionData";

interface propTypes {
  bg: string;
  color: string;
}

const AboutWebSection = ({ bg, color }: propTypes) => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 100], [0, -400]);
  return (
    <Flex
      display={["none", "none", "none", "flex", "flex"]}
      mx={[6, 6, 8, 28, 44]}
      mt={["5rem"]}
      mb={[8]}
      width="full"
      direction={["row"]}
      justify="space-between"
      alignItems="start"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Flex direction="column" gap={40}>
        {aboutSectionData.map(
          ({ heading, subHeading, description, link, buttonText }) => (
            <motion.div
              key={heading}
              transition={{ delay: 2, ease: "easeOut" }}
              style={{ y: y1, x: 0 }}
            >
              <AboutSectionCard
                heading={heading}
                description={description}
                subHeading={subHeading}
                link={link}
                buttonText={buttonText}
                background={bg}
                color={color}
              />
            </motion.div>
          )
        )}
      </Flex>
      <AboutImagesSection />
    </Flex>
  );
};

export default AboutWebSection;
