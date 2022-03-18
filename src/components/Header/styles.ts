import styled from "styled-components";

export const Container = styled.header`
  background-color: #49065e;
  height: 15vh;
  padding: 0px 50px;
`;

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 5vh;
  gap: 30px;
`;

export const Logo = styled.h1`
  color: #fff;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;
