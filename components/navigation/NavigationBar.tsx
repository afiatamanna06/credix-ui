import { Flex } from "@chakra-ui/react"
import NavigationMarquee from "./NavigationMarquee"

function NavigationBar() {
  return (
    <Flex fontFamily="'IBM Plex Mono', monospace">
      <NavigationMarquee />
    </Flex>
  )
}

export default NavigationBar