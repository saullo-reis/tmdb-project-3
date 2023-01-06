import { useState, useEffect } from "react";
import { getName } from "./get";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../loading/loading";
import { ImageBackground } from "../../styles";

export const Search = (data) => {
    const [films, setFilms] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          const fetchData = async () => {
            if (data.data != "") {
              const Film = await getName(data.data);
              setFilms(Film.results);
              setRemoveLoading(true)
            } else {
              return;
            }
          };
          fetchData();
        }, 300);
      }, [data.data]);

    return(
        <>
            <H2>Filmes Pesquisados</H2>
            <Ul>
              {films.length > 0 && films.map((film, index) => {
                return (
                  <Li key={index}>
                    <Link to={`/movie/${film.id}`}>
                      {film.poster_path == null ? (
                        <Box>
                          <p>Foto do filme não encontrada</p>
                        </Box>
                      ) : (
                        <ImageBackground
                          style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/${film.poster_path})`,
                          }}
                        ></ImageBackground>
                      )}
                    </Link>
                    <H4>{film.title}</H4>
                  </Li>
                );
              })}
              {!removeLoading && <Loading/>}
            </Ul>
        </>
    )
}

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

const Img = styled.img`
  border-radius: 10px;
  height: 290px;
  box-shadow: 5px 2px 2px black;
`;

const H2 = styled.h1`
  font-size: 40px;
  color: #ffffff;
  margin: 20px 0 20px 0;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-shadow: 5px 2px 2px black;
  text-align:center;
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  justify-content:center;
  align-items:center;
  a {
    text-decoration: none;
  }
`;
const H4 = styled.p`
  display: none;
  color: white;
  text-align:center;
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
