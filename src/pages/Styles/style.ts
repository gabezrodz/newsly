import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: 40px;
  color: red;
`;

export const Wrapper = styled.main`
  max-width: 1140px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media(max-width: 600px){
    max-width: 500px
  }
`;
