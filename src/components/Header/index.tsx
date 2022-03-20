import { Link } from "react-router-dom";
import { Container, Wrapper, Logo, Menu } from "./styles";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>Newsly</Logo>
        <Menu>
          <Link to="/">🏠 Home</Link>
          <Link to="/tecnologia">💻 Tecnologia</Link>
          <Link to="/saude"> 🧘‍♂️ Saúde</Link>
          <Link to="/esportes">⚽ Esportes</Link>
          <Link to="/economia"> 💰 Economia</Link>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Header;
