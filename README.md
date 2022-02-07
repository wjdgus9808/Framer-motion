## Framer Motion

reactJs 애니메이션 라이브러리

\*\* initial
Element의 초기 상태
\*\* animate
Element의 최종 상태
애니메이션은 기본적으로 spring을 내재하고 있어 튕긴다

\*\*variants
자식 애니메이션까지 컨트롤 할 수 있게 해줌
부모 Var의 prop을 자식이 상속받기 때문에
child var의 prop의 이름도 부모랑 똑같이해야함

dragConstraints
허용된 드래그 가능 영역에 제약 조건을 적용합니다. 영역에 useRef를 이용해서 넘겨줌

dragSnapToOrigin
true인 경우 드래그 가능한 요소는 놓을 때 중심/원점으로 다시 애니메이션됩니다.

dragElastic
제한된 바깥을 벗어날 수 있는 이동 정도입니다.

MotionValue
motio값을 트래킹 할 수 있게해줌 motionvalue가 바뀌어도 컴포넌트는 리랜더링 되지않음

useMotionValue
.get() .set() .onChange() 등 사용가능

useTransform
값을 받아 원하는 출력값을 받음 motionvalue,value의값,값에따른output값 인자로받음

useViewportScroll
뷰포트가 스크롤될 때 업데이트되는 MotionValues를 리턴합니다.

AnimatePresence를 사용하면 React 트리에서 컴포넌트가 제거될 때 제거되는 컴포넌트에 애니메이션 효과를 줄 수 있습니다.
조건: visible상태여야함(<AnimatePresence></AnimatePresence>) 내부에 coindition이 있어야함 showing? <> : null
initial,animate,exit 설정해주면됨

React Js에서 component의 key가 바뀌면 새component로 리랜더링

custom은 variants에 데이터를 보낼수있게해줌 custom쓰려면 variant를 object리턴하는 함구로 만들어야함

exitBeforeEnter
true로 설정하면 AnimatePresence는 한 번에 하나의 컴포넌트만 랜더링합니다.

Syncing layout animations
모션 컴포넌트의 layout prop은 레이아웃이 변할 때마다, 자동으로 애니메이션을 적용합니다.
https://www.framer.com/docs/animate-shared-layout/#syncing-layout-animations

Animate between components
동일한 layoutId(string)를 공유하는 컴포넌트 간에 애니메이션을 적용하는 데 사용할 수 있습니다.
