import { Box, Button, Flex, Switch, useColorMode } from "@chakra-ui/react"
import NavigationMarquee from "./NavigationMarquee"

function NavigationBar() {

  const { colorMode, toggleColorMode } = useColorMode()
  
  return (
    <Flex direction="column" fontFamily="'IBM Plex Mono', monospace">
      <NavigationMarquee />
      <Box>
      <Switch size='md' onChange={toggleColorMode} />
      </Box>
    </Flex>
  )
}

export default NavigationBar