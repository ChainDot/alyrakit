import { SlideFade } from "@chakra-ui/transition";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

const SlideFadeOnScroll = ({ children }) => {
  const myRef = useRef("");
  const { enterCount } = useInViewport(myRef, { theshold: 0.1 }, {}, {});
  return (
    <SlideFade
      ref={myRef}
      in={enterCount > 0}
      offsetY="20px"
      delay={{ enter: 0.25 }}
      transition={{
        enter: { duration: 1 },
      }}
    >
      {children}
    </SlideFade>
  );
};

export default SlideFadeOnScroll;
