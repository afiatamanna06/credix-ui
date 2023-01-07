import { Button, Flex, useColorModeValue } from "@chakra-ui/react";

export default function Index() {

  const bg = useColorModeValue("white", "black");
  const color = useColorModeValue("white", "black");
  
  return (
    <div>
      <Flex direction="column" minH="100vh" bg={bg} color={color}>

      </Flex>
    </div>
  );
}
