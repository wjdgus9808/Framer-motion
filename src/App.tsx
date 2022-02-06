import styled from "styled-components";
import { motion } from "framer-motion";
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
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
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const circleVariants = {
  start: {
    scale: 0,
    y: 100, //xmy는 framer motion에서만 사용가능
  },
  end: {
    scale: 1,
    y: 0,
    transition: {
      // delay: 0.5, box애니메이션 끝난후 실행
    },
  },
};
function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        {/* Chid는 기본적으로 부모의 Variants의 prop(initail,animate등)을 상속받음 */}
        {/* 따라서 Child의 Var설정할때 prop이름을 동일하게 해야함 */}
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
