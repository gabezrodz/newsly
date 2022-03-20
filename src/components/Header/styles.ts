import styled from "styled-components";

export const Container = styled.header`
  background-color: #49065e;
  height: 15vh;
  padding: 0px 50px;
  @media (max-width: 600px) {
    height: 30vh;
  }
`;

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding-top: 5vh;
  gap: 30px;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 600px) {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.h1`
  color: #fff;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content:left;
    gap: 10px 50px;
    margin-left:  25px;
  }
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;
