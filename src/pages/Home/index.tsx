import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Card from "../../components/Card/Card";
import { Wrapper } from "../Styles/style";
import LoadingAnimation from "../../components/Loading";
import { getTopHeadLines } from "../../services/newsApi/noticias";

interface Noticia {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

function Home() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNoticias = async () => {
    setIsLoading(true);
    const response = await getTopHeadLines();
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
          noticias.map((noticia, index) => {
            return (
              <Card
                key={index}
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
        <h3>
          Made by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gabezrodz"
          >
            Gabriel R. Rodrigues
          </a>
        </h3>
      </Wrapper>
    </>
  );
}

export default Home;
