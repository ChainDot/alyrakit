import { Button } from "@chakra-ui/button";
import { Badge, Center, Container, Heading, Text } from "@chakra-ui/layout";

const GetStarted = () => {
  return (
    <Container id="buy-now" py="24" maxW="container.md" align="center">
      <Badge mb="6">Get Started</Badge>
      <Heading textAlign="center" mb="6">
        Get AlyraKit and save your time
      </Heading>
      <Text fontSize="xl" mb="6" textAlign="center">
        Stop wasting time trying to do it the "right way" and build a site from
        scratch. AlyraKit is faster, easier, and you still have complete
        control.
      </Text>
      <Center>
        <Button colorScheme="teal" size="lg">
          Buy now
        </Button>
      </Center>
    </Container>
  );
};

export default GetStarted;
