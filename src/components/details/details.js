import { useEffect, useState } from "react";
import { getMovie, getSimilarMovie } from "../main/get";
import { useParams} from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icone.png";
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
      <Header>
        <Link to={"/"}>
          <H1>
            <img src={icon} />
          </H1>
        </Link>
      </Header>
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

const H2 = styled.h1`
  font-size: 40px;
  color: #ffffff;
  margin: 20px 0 20px 0;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-shadow: 5px 2px 2px black;
`;

const Box = styled.div`
  border-radius: 10px;
  height: 290px;
  box-shadow: 5px 2px 2px black;
  background-color: gray;
  color: white;
  font-weight: bold;
  width: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 50%;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  a {
    text-decoration: none;
  }
`;
const H4 = styled.p`
  display: none;
  color: white;
`;
const Li = styled.li`
  list-style: none;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: 1.2s;
  :hover {
    filter: brightness(150%);
    p {
      display: block;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

const Img = styled.img`
  border-radius: 10px;
  height: 290px;
  box-shadow: 5px 2px 2px black;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(#000000, #363434);
  a {
    text-decoration: none;
  }
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-shadow: 3px 3px black;
  border-radius: 900px;
  width: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1.1s;
  background-color: white;
  cursor: pointer;
  :hover {
    background-color: red;
  }
  img {
    width: 100px;
  }
`;

const Infos = styled.section`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  height:150px;
  width:300px;
  text-align:center;
  h3 {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-shadow: 3px 3px black;
    text-align:center;
  }
`;
const SectionSimilar = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  h1{
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
  }
  }
  ul{
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

const Section = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

const PhotoAndInfos = styled.section`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const PhotoAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align:center;
    font-size: 28px;
    width:320px;
    font-weight: bold;
    text-shadow: 3px 3px black;
  }
`;

const Division = styled.div`
  width: 100%;
  height: 3px;
  background-color: #000000;
  margin: 10px 0 10px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Production = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  width: 140px;
  transition: 1.7s;
  font-weight: bold;
  div {
    display: none;
  }
  h2 {
    text-shadow: 3px 3px black;
    transition: 1.7s;
  }
  img {
    margin: 10px;
  }
  :hover {
    div {
      display: flex;
      margin: 50px;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 480px;
      z-index: 2;
      background-color: white;
      color: black;
      padding: 20px;
    }
    h2 {
      color: red;
    }
  }
`;

const OverView = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  width: 130px;
  margin-bottom: 30px;
  text-align:center;
  h2 {
    cursor: pointer;
    text-shadow: 3px 3px black;
    transition: 1.7s;
  }
  div {
    display: none;
    width: 300px;
    margin: 20px;
  }
  :hover {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 450px;
      color: black;
      z-index: 2;
      background-color: white;
      padding: 20px;
      font-weight: bold;
    }
    h2 {
      color: red;
    }
  }
`;
const Gen = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  width: 130px;
  margin-bottom: 30px;
  h2 {
    transition: 1.7s;
    text-shadow: 3px 3px black;
  }
  div {
    display: none;
    margin: 0;
  }
  :hover {
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 410px;
      z-index: 2;
      background-color: white;
      color: black;
      padding: 20px;
      font-weight: bold;
    }
    h2 {
      color: red;
    }
  }
`;

export { Details };
