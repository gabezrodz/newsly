import { Container, Wrapper, Logo, Menu, Link } from "./styles";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>Portal de Noticías</Logo>
        <Menu>
          <Link>Home</Link>
          <Link>Tecnologia</Link>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Header;
