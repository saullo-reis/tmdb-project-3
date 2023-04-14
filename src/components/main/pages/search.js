import { useState, useEffect } from "react";
import { getName } from "../../../get";
import { Link } from "react-router-dom";
import { Loading } from "../../loading/loading";
import {
  Ul,
  H2,
  Box,
  H4,
  Li,
  ImageBackground, 
  Section
} from "../../../styles";

export const Search = (data) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        if (data.data !== "") {
          const Film = await getName(data.data);
          setFilms(Film.results);
          setIsLoading(true)
        } else {
          return;
        }
      };
      fetchData();
    }, 300);
  }, [data.data]);

  return (
    <Section>
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
        {!isLoading && <Loading />}
      </Ul>
    </Section>
  )
}

