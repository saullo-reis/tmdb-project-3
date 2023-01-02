import styled from "styled-components";
import { getUpcoming } from "./get";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";
import {Button, Ul, Li, H4, SectionFilms, Div, H2, Box, Img} from "../../styles"

export const Upcoming = () => {
  const [Upcoming, setUpcoming] = useState([]);
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
        const response = await getUpcoming(count);
        setUpcoming(response.results);
        setRemoveLoading(true);
      };
      fetchData();
    }, 300);
  }, [count]);

  return (
    <SectionFilms>
      <Div>
        <Link to={"/Upcoming"} style={{ background: "red", color: "white" }}>
          Lançamento
        </Link>
        <Link to={"/emAlta"}>Filmes em Alta</Link>
        <Link to={"/bemRanqueados"}>Filmes bem ranqueados</Link>
      </Div>
      <Div>
        <H2>Filmes em Lançamento</H2>
      </Div>
      <Ul>
        {Upcoming.length > 0 &&
          Upcoming.map((film, index) => {
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
        {!removeLoading && <Loading />}
      </Ul>
      <Div>
        <Button onClick={() => voltarPagina()}>←</Button>
        <H2>{count}</H2>
        <Button onClick={() => avancarPagina()}>→</Button>
      </Div>
    </SectionFilms>
  );
}; 


