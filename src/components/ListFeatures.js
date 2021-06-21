import { useColorMode } from "@chakra-ui/color-mode";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Img } from "@chakra-ui/image";
import {
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
} from "@chakra-ui/layout";
import working from "../assets/working.svg";

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "white" : "teal.700"}>
      <Container
        as="header"
        maxW="container.lg"
        py="28"
        display="flex"
        justifyContent="center"
      >
        <Stack
          direction={["column", null, "row"]}
          sx={{
            gap: "2rem",
          }}
          alignItems="center"
        >
          <Img
            src={working}
            alt="Illustration with a computer on the desk"
            width="400"
            height="295"
          />

          <Box>
            <Heading as="h2" mb="6" fontFamily="Trocchi" fontWeight="400">
              The most useful resource ever created for designers
            </Heading>

            <Box>
              <List direction="row">
                <SimpleGrid columns="2">
                  {list.map((el, index) => {
                    return (
                      <ListItem key={index} mb="3">
                        <ListIcon as={CheckCircleIcon} color="teal.300" />
                        {el}
                      </ListItem>
                    );
                  })}
                </SimpleGrid>
              </List>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ListFeatures;
