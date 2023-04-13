import { useEffect, useState } from "react";
import { getMovie, getSimilarMovie } from "../../get";
import { useParams} from "react-router-dom";
import {Section, PhotoAndInfos, PhotoAndName, Container, Gen, OverView, Production, Division, Infos, SectionSimilar, H2, Ul, Li, Box, Img, H4}from "./style/stylesdetails";
import { Link } from "react-router-dom";
import "./media.css"

const Details = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();
  const [generos, setGeneros] = useState([]);
  const [production, setProduction] = useState([]);
  const [similarMovies, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const filmDetails = await getMovie(id);
      setFilm(filmDetails);
      setGeneros(filmDetails.genres);
      setProduction(filmDetails.production_companies);
    };
    fetchData();
  }, [id]);

  console.log(id)
  useEffect(() => {
    const fetchData = async () => {
      const response = await getSimilarMovie(id);
      console.log(response);
      setSimilarMovie(response.results);
    };
    fetchData();
  }, []);
  return (
    <>
      <Section >
        <PhotoAndInfos className="section-details">
          <PhotoAndName>
            <h1>{film.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w400/${film.poster_path}`}
            ></img>
          </PhotoAndName>
          <Container className="container">
            <Gen className="genre">
              <h2>Gêneros ⇩</h2>
              <div className="div">
                {generos.map((element, index) => {
                  return <p key={index}>{element.name}</p>;
                })}
              </div>
            </Gen>
            <OverView className="overview">
              <h2>Sinopse ⇩</h2>
              <div className="div">
                <p>
                  {film.overview == "" ? (
                    <p>Sinopse não informada</p>
                  ) : (
                    <p>{film.overview}</p>
                  )}
                </p>
              </div>
            </OverView>
            <Production className="production">
              <h2>Produção ⇩</h2>
              <div className="div">
                {production.length === 0 ? (
                  <p>Produção não informada.</p>
                ) : (
                  <p>Produções:</p>
                )}
                {production.map((element) => {
                  return (
                    <>
                      {element.length == 0 ? (
                        <p>Produção não informada</p>
                      ) : (
                        <img
                          src={`https://image.tmdb.org/t/p/w200/${element.logo_path}`}
                        ></img>
                      )}
                    </>
                  );
                })}
              </div>
            </Production>
            <Division />
            <Infos>
              <h3>
                {film.adult == false
                  ? "Não é um filme adulto."
                  : "É um filme adulto"}
              </h3>
              <h3>
                {film.status == "Released"
                  ? "Filme já Lançado"
                  : "Filme não Lançado"}
              </h3>
              <h3>Popularidade: {film.popularity}</h3>
              <h3>Data de Lançamento: {film.release_date}</h3>
              <h3>Pontuação média: {film.vote_average}</h3>
            </Infos>
          </Container>
        </PhotoAndInfos>
        <Division />
        <SectionSimilar>
          <H2>Filmes Similares</H2>
          <Ul>
            {similarMovies.map((film, index) => {
              {
                return (
                  <Li key={index}>
                    <Link to={`/movie/${film.id}`}>
                      {film.poster_path == null ? (
                        <Box>
                          <p>Foto do filme não encontrada</p>
                        </Box>
                      ) : (
                        <Img
                          src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                        ></Img>
                      )}
                    </Link>
                    <H4>{film.title}</H4>
                  </Li>
                );
              }
            })}
          </Ul>
        </SectionSimilar>
      </Section>
    </>
  );
};


export { Details };
