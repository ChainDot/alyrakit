import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Badge,
  Box,
  Center,
  Container,
  Heading,
  Text,
} from "@chakra-ui/layout";
import ScaleFadeOnScroll from "./ScaleFadeOnScroll";

const GetStarted = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "white" : "teal.900"}>
      <ScaleFadeOnScroll>
        <Container id="buy-now" py="24" maxW="container.md" align="center">
          <Badge
            mb="6"
            p="2"
            bg={colorMode === "light" ? "white" : "teal.700"}
            borderRadius="16px"
          >
            Get Started
          </Badge>
          <Heading
            textAlign="center"
            mb="6"
            fontFamily="Trocchi"
            fontWeight="400"
          >
            Get AlyraKit and save your time
          </Heading>
          <Text fontSize="xl" mb="6" textAlign="center">
            Stop wasting time trying to do it the "right way" and build a site
            from scratch. AlyraKit is faster, easier, and you still have
            complete control.
          </Text>
          <Center>
            <Button colorScheme="teal" size="lg">
              Buy now
            </Button>
          </Center>
        </Container>
      </ScaleFadeOnScroll>
    </Box>
  );
};

export default GetStarted;
