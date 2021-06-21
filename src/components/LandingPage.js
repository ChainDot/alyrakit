import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import Features from "./Features";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import ListFeatures from "./ListFeatures";
import Navigation from "./Navigation";
import Pricing from "./Pricing";
import Sample from "./Sample";

const LandingPage = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "white" : "teal.800"}>
      <Navigation />
      <Header />
      <main>
        <Features />
        <ListFeatures />
        <Sample />
        <Pricing />
        <GetStarted />
      </main>
      <Footer />
    </Box>
  );
};

export default LandingPage;
