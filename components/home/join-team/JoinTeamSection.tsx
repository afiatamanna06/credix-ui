import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import CommonButton from "components/common/CommonButton";

function JoinTeamSection() {
  const bg = useColorModeValue("#f6f6f6", "black");
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      bg={bg}
      mx={[6, 6, 8, 28, 44]}
      direction={["column", "column", "column", "row", "row"]}
      color={color}
      border="1px"
      gap={[8]}
      mb="16"
      mt={[14, 14, 0, 0]}
      p="10"
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
        <Box
          maxWidth={["100%", "100%", "100%", "40rem"]}
          fontSize={["sm", "sm", "md", "md"]}
        >
          Become part of the team and help us build the debt capital markets
          infrastructure of the future.
        </Box>
      </Flex>
      <a
        href="https://wellfound.com/company/credix"
        target="_blank"
        rel="noreferrer"
      >
        <CommonButton
          bg={color}
          color={bg}
          borderColor={color}
          name="See openings"
          hoverBg={bg}
          hoverColor={color}
          width={["full", "full", "full", "min-content"]}
        />
      </a>
    </Flex>
  );
}

export default JoinTeamSection;
