import { Box, Flex } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { navigationMarqueeData } from "./NavigationMarqueeData";

function NavigationMarquee() {
  return (
    <Box bg="white" color="black" maxW="full" fontSize="lg">
      <Marquee
        delay={2}
        direction="left"
        play={true}
        gradientWidth={0}
      >
          {navigationMarqueeData.map(({title, data}) => (
              <Flex key={title} gap={3} mx={6}>
                  <Box>{title}</Box>
                  <Box fontWeight="semibold">{data}</Box>
              </Flex>
          ))}
      </Marquee>
    </Box>
  );
}

export default NavigationMarquee;
