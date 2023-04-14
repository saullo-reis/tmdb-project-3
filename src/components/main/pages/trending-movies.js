import { getPopular } from "../../../get";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../loading/loading";
import { Ul, Div, SectionFilms, H2, Li, Box, H4, Pages, ImageBackground } from "../../../styles"
import { Buttons } from "../buttons/buttons";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

const Films = () => {
  const [filmsInAlt, setFilmsInAlt] = useState([]);
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
        const response = await getPopular(count);
        setFilmsInAlt(response.results);
        setRemoveLoading(true)
      };
      fetchData();
    }, 300);
  }, [count]);

  return (
    <SectionFilms>
      <Buttons actualPage="emAlta" />
      <Div>
        <H2>Filmes Em Alta</H2>
      </Div>
      <Ul>
        {filmsInAlt.length > 0 && filmsInAlt.map((film, index) => {
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
        <button onClick={() => handleClick('down')}><AiOutlineArrowLeft /></button>
        <H2>{count}</H2>
        <button onClick={() => handleClick('up')}><AiOutlineArrowRight /></button>
      </Pages>
    </SectionFilms>
  );
};

export default Films;
