import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  place-self: center;
`;
const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const potato = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    console.log("ho");
    // potato.onChange(() => console.log(x.get()));
  }, [x]);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          style={{ x: x, scale: potato }}
          drag
          dragElastic={0.5}
          dragSnapToOrigin
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          //drag할때 애니메이션으로 주려면 rgb나rgba값으로
          whileHover="hover"
          whileTap="click"
        >
          {/* Chid는 기본적으로 부모의 Variants의 prop(initail,animate등)을 상속받음 */}
          {/* 따라서 Child의 Var설정할때 prop이름을 동일하게 해야함 */}
        </Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
