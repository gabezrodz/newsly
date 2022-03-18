import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card/Card";
import { Wrapper } from "../../components/Header/styles";
import { getTopHeadLines } from "../../services/newsApi/noticias";

function Home() {
   const [noticia, setNoticia] = useState([]) 
  useEffect(() => {
    const getNoticias = async () => {
     const response =  await getTopHeadLines();

    
     setNoticia(response.articles)
    };

    getNoticias()
  }, []);

  console.log(noticia)
  return (
    <>
      <Header />
      <Wrapper>
        <Card
          titulo="Teste"
          resumo="iiaasadasi"
          link="teste"
          image="ueassasssasasasa"
        />
      </Wrapper>
    </>
  );
}

export default Home;
