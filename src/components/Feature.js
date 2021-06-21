import { Img } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";

const Feature = ({ icon, title, text }) => {
  return (
    <Box>
      <Img width="64px" height="64px" src={icon} alt="" mb="4" />
      <Heading size="md" mb="4">
        {title}
      </Heading>
      <Text>{text}</Text>
    </Box>
  );
};

export default Feature;
