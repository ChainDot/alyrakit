import { useRef } from "react";
import { ScaleFade } from "@chakra-ui/transition";
import { useInViewport } from "react-in-viewport";

const ScaleFadeOnScroll = ({ children, initialScale = 0.9 }) => {
  const myRef = useRef();
  const { enterCount } = useInViewport(myRef, { threshold: 0.1 }, {}, {});

  return (
    <ScaleFade
      ref={myRef}
      in={enterCount}
      initialScale={initialScale}
      delay={{ enter: 0.25 }}
      transition={{
        enter: { duration: 1 },
      }}
    >
      {children}
    </ScaleFade>
  );
};

export default ScaleFadeOnScroll;
