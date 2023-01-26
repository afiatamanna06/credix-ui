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
      <Image
        src={image}
        objectFit="cover"
        w={["7rem", "7rem", "10rem", "10rem"]}
        h={["9rem", "9rem", "13rem", "13rem"]}
        alt=""
      />
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
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <Box>
              <i className="ri-linkedin-box-fill ri-lg"></i>
            </Box>
          </a>
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <Box>
              <i className="ri-twitter-fill ri-lg"></i>
            </Box>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CoreTeamCard;
