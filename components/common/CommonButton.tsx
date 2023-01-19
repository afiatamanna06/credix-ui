import { Button, Image } from "@chakra-ui/react";

interface propTypes {
  name: string;
  onClick?: any;
  color?: string;
  borderColor?: string;
  bg?: string;
  image?: string;
  hoverBg?: string;
  hoverColor?: string;
}

function CommonButton({
  name,
  onClick,
  color,
  bg,
  hoverBg,
  borderColor,
  hoverColor,
  image,
}: propTypes) {
  return (
    <Button
      bg={bg}
      color={color}
      border="1px"
      borderColor={borderColor}
      borderRadius="4px"
      fontSize="xs"
      fontWeight="semibold"
      px={12}
      py={6}
      _hover={{
        bg: hoverBg,
        color: hoverColor,
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
}

export default CommonButton;
