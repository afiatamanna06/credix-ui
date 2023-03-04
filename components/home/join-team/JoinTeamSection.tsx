import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonButton from "components/common/CommonButton";

function JoinTeamSection() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      bg={bg}
      px={[6, 6, 8, 28, 44]}
      direction={["column", "column", "column", "row", "row"]}
      color={color}
      gap={[28, 28, 8, 8]}
      py={[8, 8, 20, 24]}
      alignItems="center"
      fontFamily="'IBM Plex Mono', monospace"
      justify="space-between"
    >
      <Flex direction="column" gap={4}>
        <Box
          fontSize={["2xl", "2xl", "3xl", "3xl"]}
          fontWeight="bold"
          fontFamily="'Poppins', sans-serif"
        >
          Join the team
        </Box>
        <Box maxWidth={["100%", "100%", "100%", "40rem"]}>
          Become part of the team and help us build the debt capital markets
          infrastructure of the future.
        </Box>
      </Flex>
      <CommonButton
        bg={color}
        color={bg}
        borderColor={color}
        name="See openings"
        hoverBg={bg}
        hoverColor={color}
      />
    </Flex>
  );
}

export default JoinTeamSection;
