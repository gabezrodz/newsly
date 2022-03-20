import { LoadingDot, LoadingContainter } from "./style";

const loadingContainerVariants = {
  start: {
    transition:{
        staggerChildren: 0.1
    }
  },
  end: {
    transition:{
        staggerChildren: 0.1
    },
  },
};

const loadingDotVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingDotTransition ={
    duration: 0.2,
    yoyo: Infinity,
    ease: "easeInOut"
}

function LoadingAnimation() {
  return (
    <LoadingContainter
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <LoadingDot
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      />
      <LoadingDot
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      />
      <LoadingDot
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      />
    </LoadingContainter>
  );
}

export default LoadingAnimation;
