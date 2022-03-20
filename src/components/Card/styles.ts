import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px;
  background: #fff;
  gap: 10px;
  width: 500px;
  animation: ${cardAnimation} 1s ease-out forwards;

  img {
    object-fit: cover;
    height: 250px;
    border-radius: 8px;
    margin: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const Titulo = styled.h4``;
export const Resumo = styled.p`
  margin: 5px 0;
`;

export const ButtonNoticia = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: #49065e;
  border-radius: 8px;
  padding: 10px 20px;
  width: fit-content;
`;
