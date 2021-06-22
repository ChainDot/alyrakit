import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Center, Container, Text } from "@chakra-ui/layout";
import Form from "./Form";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Sample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container id="sample" py="24">
      <SlideFadeOnScroll>
        <Text fontSize="xl" mb="6" textAlign="center">
          Using AlyraKit to build your site means never worrying about designing
          another page or cross browser compatibility. Our ever-growing library
          of components and pre-designed layouts will make your life easier.
        </Text>
        <Center>
          <Button colorScheme="teal" size="lg" onClick={onOpen}>
            Download a Sample
          </Button>
        </Center>

        <Form isOpen={isOpen} onClose={onClose} />
      </SlideFadeOnScroll>
    </Container>
  );
};

export default Sample;
