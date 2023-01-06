import { Link } from "react-router-dom";
import "./media.css";
import { useState, useEffect } from "react";
import { getUpcoming } from "./get";
import {
  Box,
  Img,
  H4,
  Li,
  Section,
  Ul,
  Div,
  ImageBackground,
} from "../../styles";


const Main = () => {
  const [Upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUpcoming();
      setUpcoming(response.results);
    };
    fetchData();
  }, []);
  return (
    <Section>
      <Div>
        <Link to={"/Upcoming"}>Lançamento</Link>
        <Link to={"/emAlta"}>Filmes em Alta</Link>
        <Link to={"/bemRanqueados"}>Filmes bem ranqueados</Link>
      </Div>
      <Ul>
        {Upcoming.map((film, index) => {
          {
            return (
              <Li key={index}>
                <Link to={`/movie/${film.id}`}>
                  {film.poster_path === null ? (
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
      </Ul>
    </Section>
  );
};

export default Main;
