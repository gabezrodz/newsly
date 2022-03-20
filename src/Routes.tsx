import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import Economia from "./pages/Economia";
import Esportes from "./pages/Esportes";
import Home from "./pages/Home";
import Saude from "./pages/Saude";
import Tecnologia from "./pages/Tecnologia";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologia" element={<Tecnologia/>} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/esportes" element={<Esportes />} />
        <Route path="/economia" element={<Economia />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes