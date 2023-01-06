import styled from "styled-components";
import { getPopular } from "./get";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";
import {Ul, Div, SectionFilms, H2, Li, Box, H4, Button, Img, ImageBackground } from "../../styles"

const Films = () => {
  const [filmsInAlt, setFilmsInAlt] = useState([]);
  const [count, setCount] = useState(1);
  const [removeLoading, setRemoveLoading] = useState(false);

  const voltarPagina = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };
  const avancarPagina = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await getPopular(count);
        setFilmsInAlt(response.results);
        setRemoveLoading(true)
      };
      fetchData();
    }, 300);
  }, [count]);

  return (
    <SectionFilms>
      <Div>
        <Link to={"/Upcoming"}>Lançamento</Link>
        <Link to={"/emAlta"} style={{ background: "red", color: "white" }}>
          Filmes em Alta
        </Link>
        <Link to={"/bemRanqueados"}>Filmes bem ranqueados</Link>
      </Div>
      <Div>
        <H2>Filmes Em Alta</H2>
      </Div>
      <Ul>
        {filmsInAlt.length > 0 && filmsInAlt.map((film, index) => {
          {
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
          }
        })}
        {!removeLoading && <Loading/>}
      </Ul>
      <Div>
        <Button onClick={() => voltarPagina()}>←</Button>
        <H2>{count}</H2>
        <Button onClick={() => avancarPagina()}>→</Button>
      </Div>
    </SectionFilms>
  );
};

export default Films;
