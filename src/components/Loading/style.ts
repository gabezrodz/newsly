import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingContainter = styled(motion.div)`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const LoadingDot = styled(motion.span)`
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.5rem;
  background-color: #fff;
`;
