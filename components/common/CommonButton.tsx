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
  width?: string[];
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
  width,
}: propTypes) {
  return (
    <Button
      bg={bg}
      color={color}
      border="1px"
      borderColor={borderColor}
      borderRadius="4px"
      fontSize="sm"
      width={width}
      fontWeight="semibold"
      px={[3, 3, 12, 12]}
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
