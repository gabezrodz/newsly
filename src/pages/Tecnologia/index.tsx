import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card/Card";
import { Wrapper } from "../Styles/style";
import LoadingAnimation from "../../components/Loading";
import { getTopHeadLinesTech } from "../../services/newsApi/noticias";

interface Noticia {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

function Tecnologia() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNoticias = async () => {
    setIsLoading(true);
    const response = await getTopHeadLinesTech();
    setNoticias(response.articles);
    setIsLoading(false);
  };
  useEffect(() => {
    getNoticias();
  }, []);

  console.log(noticias);

  return (
    <>
      <Header />
      <Wrapper>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          noticias?.map((noticia) => {
            return (
              <Card
                key={Math.random()}
                titulo={noticia.title}
                resumo={noticia.description}
                link={noticia.url}
                image={
                  noticia.urlToImage !== null
                    ? noticia.urlToImage
                    : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="
                }
              />
            );
          })
        )}
      </Wrapper>
    </>
  );
}

export default Tecnologia;
