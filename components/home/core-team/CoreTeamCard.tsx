import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

interface propTypes {
  image: string;
  name: string;
  position: string;
  linkedinUrl: string;
  twitterUrl: string;
}

function CoreTeamCard({
  image,
  name,
  position,
  linkedinUrl,
  twitterUrl,
}: propTypes) {
  return (
    <Flex direction={["row", "row", "row", "column", "column"]} gap={4}>
      <Image src={image} objectFit="cover" w="10rem" h="13rem" alt="" />
      <Flex direction="column">
        <Box
          fontSize={["md", "md", "lg", "lg"]}
          fontWeight="bold"
          fontFamily="'Poppins', sans-serif"
        >
          {name}
        </Box>
        <Box
          fontFamily="'IBM Plex Mono', monospace"
          fontWeight="semibold"
          fontSize="xs"
        >
          {position}
        </Box>
        <Flex gap={2} pt="4">
          <Link to={linkedinUrl}>
            <Box>
              <i className="ri-linkedin-box-fill ri-lg"></i>
            </Box>
          </Link>
          <Link to={twitterUrl}>
            <Box>
              <i className="ri-twitter-fill ri-lg"></i>
            </Box>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CoreTeamCard;
