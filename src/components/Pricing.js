import PricingSwitch from "./PricingSwitch";
import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  Center,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import { useCountUp } from "react-countup";

const Pricing = () => {
  const config = {
    yearly: 29,
    monthly: 49,
  };
  const list = [
    "Rich, responsive landing pages",
    "100+ styled components",
    "Flexible, simple license",
    "Speedy build tooling",
    "6 months free support included",
  ];

  const { countUp, update } = useCountUp({
    start: config.yearly,
    end: config.monthly,
    delay: 0,
    startOnMount: false,
    duration: 0.6,
  });

  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      update(config.monthly);
    } else {
      update(config.yearly);
    }
  };

  const { colorMode } = useColorMode();

  return (
    <Box
      as="section"
      bg={colorMode === "light" ? "white" : "teal.400"}
      id="pricing"
      py="20"
    >
      <SlideFadeOnScroll>
        <Container maxW="container.md" align="center">
          <Heading
            textAlign="center"
            mb="6"
            fontFamily="special"
            fontWeight="400"
          >
            Fair, simple pricing for all
          </Heading>

          <Text fontSize="lg" textAlign="center" maxW="60ch" mb="6">
            All types of businesses need access to development resources, so we
            give you the option to decide how much you need to use.
          </Text>

          <PricingSwitch onChange={handleSwitchChange} />

          <Box d={["block", null, "flex"]} alignItems="center">
            <Box
              bg={colorMode === "light" ? "white" : "teal.900"}
              shadow="lg"
              flex="1"
              zIndex="1"
              mb={[6, 6, 0]}
            >
              <Center pt="6">
                <Badge
                  p="2"
                  borderRadius="16px"
                  bg={colorMode === "light" ? "white" : "teal.700"}
                >
                  Standard
                </Badge>
              </Center>
              <Center>
                <Text as="b" fontSize="6xl">
                  $ {countUp}
                </Text>{" "}
                /mo
              </Center>
              <List spacing={3} p="6">
                {list.map((el, index) => {
                  return (
                    <ListItem key={index}>
                      <ListIcon as={CheckCircleIcon} color="teal.300" />
                      {el}
                    </ListItem>
                  );
                })}
              </List>
              <Button
                isFullWidth={true}
                colorScheme="teal"
                borderRadius="none"
                size="lg"
              >
                Get it now
              </Button>
            </Box>

            <Box
              bg={colorMode === "light" ? "white" : "teal.900"}
              shadow="lg"
              flex="1"
            >
              <Center pt="6">
                <Badge
                  p="2"
                  borderRadius="16px"
                  bg={colorMode === "light" ? "white" : "teal.700"}
                >
                  Entreprise
                </Badge>
              </Center>
              <Text textAlign="center" p="6" fontSize="lg">
                We offer variable pricing with discounts for larger
                organizations. Get in touch with us and we’ll figure out
                something that works for everyone.
              </Text>
              <Button
                isFullWidth={true}
                colorScheme="teal"
                borderRadius="none"
                size="lg"
              >
                Contact us
              </Button>
            </Box>
          </Box>
        </Container>
      </SlideFadeOnScroll>
    </Box>
  );
};

export default Pricing;
