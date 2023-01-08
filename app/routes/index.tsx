import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import LandingSection from "components/home/LandingSection";

export default function Index() {

  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("white", "black");
  
  return (
    <div>
      <Flex direction="column" minH="100vh" bg={bg} color={color} px={[6, 6, 8, 28, 44]}>
        <LandingSection />
      </Flex>
    </div>
  );
}
