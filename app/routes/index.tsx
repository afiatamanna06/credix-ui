import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import BackedbySection from "components/home/backed-by-section/BackedbySection";
import CoreTeamSection from "components/home/core-team/CoreTeamSection";
import JoinTeamSection from "components/home/join-team/JoinTeamSection";
import LandingSection from "components/home/landing-section/LandingSection";

export default function Index() {

  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  
  return (
    <div>
      <Flex direction="column" minH="100vh" bg={bg} color={color}>
        <LandingSection />
        <BackedbySection />
        <CoreTeamSection />
        <JoinTeamSection />
      </Flex>
    </div>
  );
}
