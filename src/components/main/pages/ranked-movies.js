import { getTopRated } from "../../../get";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading }from "../../loading/loading";
import { Buttons } from "../buttons/buttons";
import {
  Ul,
  Pages,
  H2,
  SectionTopRated,
  Box,
  H4,
  Li,
  ImageBackground,
} from "../../../styles";
export const TopRated = () => {
  const [filmsTopRated, setTopRated] = useState([]);
  const [count, setCount] = useState(1);
  const [removeLoading, setRemoveLoading] = useState(false);

  const handleClick = (action) => {
    if (action === 'up') {
      setCount(count + 1);
      return
    }
    setCount(count - 1);
  }
  
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const response = await getTopRated(count);
        setTopRated(response.results);
        setRemoveLoading(true);
      };
      fetchData();
    }, 300);
  }, [count]);

  return (
    <SectionTopRated>
      <Buttons actualPage={"topRated"} />
      <H2>Filmes bem ranqueados</H2>
      <Ul>
        {filmsTopRated.length > 0 &&
          filmsTopRated.map((film, index) => {
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
        {!removeLoading && <Loading />}
      </Ul>
      <Pages>
        <button onClick={() => handleClick('down')}>←</button>
        <H2>{count}</H2>
        <button onClick={() => handleClick('up')}>→</button>
      </Pages>
    </SectionTopRated>
  );
};
