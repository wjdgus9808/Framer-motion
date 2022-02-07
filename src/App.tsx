import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;

  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  center: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
};
const box = {
  entry: (isBack: boolean) => {
    //이 argument는 custom props로부터 옴
    return { x: isBack ? -500 : 500, opacitiy: 0, scale: 0 };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <AnimatePresence>
        {/*같은layoutId를 주면 두개의 Circle이 연결되도록 해줌 */}
        <Box>
          {/* css로인한 style변화에 animation을 줌 */}
          {!clicked ? (
            <Circle style={{ borderRadius: "50%" }} layoutId="1"></Circle>
          ) : null}
        </Box>
        <Box>
          {/* css로인한 style변화에 animation을 줌 */}
          {clicked ? (
            <Circle style={{ borderRadius: "0%" }} layoutId="1"></Circle>
          ) : null}
        </Box>
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
