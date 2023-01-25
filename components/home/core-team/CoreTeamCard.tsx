import { Box, Flex, Image } from "@chakra-ui/react"
import { Link } from "@remix-run/react";

interface propTypes {
    image: string;
    name: string;
    position: string;
    linkedinUrl: string;
    twitterUrl: string;
}

function CoreTeamCard({image, name, position, linkedinUrl, twitterUrl}: propTypes) {
  return (
    <Flex direction={["row", "row", "row", "column", "column"]}>
        <Image src={image} w="5rem" h="8rem" alt="" />
        <Flex direction="column">
            <Box>{name}</Box>
            <Box>{position}</Box>
            <Flex gap={3}>
                <Link to={linkedinUrl}>
                    <Box>
                        <i className="ri-linkedin-box-fill ri-lg"></i>
                    </Box>
                </Link>
                <Link to={linkedinUrl}>
                    <Box>
                        <i className="ri-twitter-fill ri-lg"></i>
                    </Box>
                </Link>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default CoreTeamCard