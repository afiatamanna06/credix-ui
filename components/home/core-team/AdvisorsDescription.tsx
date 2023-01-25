import { Box, Flex } from "@chakra-ui/react"

function AdvisorsDescription() {
  return (
    <Flex direction="column" gap={[8, 8, 8, 14]}>
      <Box
        fontSize={["2xl", "2xl", "3xl", "3xl"]}
        fontWeight="bold"
        fontFamily="'Poppins', sans-serif"
      >
        Our advisors
      </Box>
    </Flex>
  )
}

export default AdvisorsDescription