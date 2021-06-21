import { Container, Heading, Text, Button, Stack, Box } from "@chakra-ui/react";
import monitor from "../assets/monitor.svg";

const Header = () => {
  return (
    <Container
      as="header"
      maxW="container.lg"
      pt="28"
      pb="10"
      display="flex"
      justifyContent="center"
    >
      <Stack
        direction={["column-reverse", null, "row"]}
        sx={{
          gap: "2rem",
        }}
      >
        <Box>
          <Heading as="h1" mb="6" maxW="30ch">
            Welcome to{" "}
            <Text as="span" color="teal">
              AlyraKit.
            </Text>{" "}
            Develop anything.
          </Heading>
          <Text fontSize="xl" mb="6">
            Build a beautiful, modern website with React and Chakra UI.
          </Text>

          <Button as="a" href="#buy-now" size="lg" colorScheme="teal">
            Buy it now
          </Button>
        </Box>

        <img
          src={monitor}
          alt="Illustration with a computer on the desk"
          width="500"
          height="378"
        />
      </Stack>
    </Container>
  );
};

export default Header;
