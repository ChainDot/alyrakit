import { Button, IconButton } from "@chakra-ui/button";
import { HamburgerIcon, MoonIcon } from "@chakra-ui/icons";
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
  return (
    <Box position="fixed" w="100%" py="4" zIndex="100" bg="whiteAlpha.800">
      <Container
        as="nav"
        display="flex"
        justifyContent="space-between"
        align="center"
        maxW="container.lg"
      >
        <Link href="/" textDecoration="none">
          <Heading size="lg">AlyraKit</Heading>
        </Link>
        <List>
          <Flex justify="space-around" align="center">
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
            <ListItem mx="4">
              <Link href="/#buy-now" textTransform="uppercase">
                Buy now
              </Link>
            </ListItem>

            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                mx="2"
              />
              <MenuList>
                <MenuItem>New Tab</MenuItem>
                <MenuItem command="⌘N">New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File...</MenuItem>
              </MenuList>
            </Menu>
            <Button variant="outline">
              <MoonIcon w="4" h="4" />
            </Button>
          </Flex>
        </List>
      </Container>
    </Box>
  );
};

export default Navigation;
