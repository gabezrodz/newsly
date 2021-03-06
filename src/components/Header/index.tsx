import { Link } from "react-router-dom";
import { Container, Wrapper, Logo, Menu } from "./styles";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>Newsly</Logo>
        <Menu>
          <Link to="/"> Home ð </Link>
          <Link to="/tecnologia"> Tecnologia ð»</Link>
          <Link to="/saude">  SaÃºde ð§ââï¸</Link>
          <Link to="/esportes"> Esportes â½</Link>
          <Link to="/economia">  Economia ð°</Link>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Header;
