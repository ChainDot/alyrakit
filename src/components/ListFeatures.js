import { useColorModeValue } from "@chakra-ui/color-mode";
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
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  const bg = useColorModeValue("gray.50", "teal.700");

  return (
    <Box bg={bg}>
      <SlideFadeOnScroll>
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
            <Box flex="1">
              <Img
                src={working}
                alt="Illustration with a computer on the desk"
                width="400"
                height="295"
              />
            </Box>

            <Box flex="1">
              <Heading as="h2" mb="6" fontFamily="special" fontWeight="400">
                The most useful resource ever created for designers
              </Heading>

              <Box>
                <SimpleGrid as={List} columns="2">
                  {list.map((el, index) => {
                    return (
                      <ListItem key={index} mb="3">
                        <ListIcon as={CheckCircleIcon} color="teal.300" />
                        {el}
                      </ListItem>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Box>
          </Stack>
        </Container>
      </SlideFadeOnScroll>
    </Box>
  );
};

export default ListFeatures;
