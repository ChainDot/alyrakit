import { Button, IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg1 = useColorModeValue("whiteAlpha.800", "blackAlpha.400");
  const bg2 = useColorModeValue("gray.50", "teal.800");

  return (
    <Box as="nav" position="fixed" w="100%" py="4" zIndex="100" bg={bg1}>
      <Container
        as="nav"
        display="flex"
        justifyContent="space-between"
        align="center"
        maxW="container.lg"
      >
        <Link href="/">
          <Heading size="lg" fontWeight="500">
            AlyraKit
          </Heading>
        </Link>

        <Box display="flex" justify="space-around" alignItems="center">
          <Flex as={List} display={["none", "none", "flex"]}>
            <ListItem mx="4">
              <Link href="/#sample">
                <Text fontSize="lg" textTransform="uppercase">
                  Sample
                </Text>
              </Link>
            </ListItem>
            <ListItem mx="4">
              <Link href="/#pricing" textTransform="uppercase">
                Pricing
              </Link>
            </ListItem>
            <ListItem mx="8">
              <Link
                href="/#buy-now"
                textTransform="uppercase"
                fontWeight="bold"
              >
                Buy now
              </Link>
            </ListItem>
          </Flex>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              mx="2"
              borderRadius="5px"
              display={["block", "block", "none"]}
            />
            <MenuList>
              <MenuItem>
                <Link href="/#sample">SAMPLE</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/#pricing">PRICING</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/#buy-now">BUY NOW</Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <Button onClick={toggleColorMode} bg={bg2}>
            {colorMode === "light" ? (
              <MoonIcon w="4" h="4" />
            ) : (
              <SunIcon w="4" h="4" />
            )}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation;
