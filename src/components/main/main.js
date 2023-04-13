import { Link } from "react-router-dom";
import "./media.css";
import { useState, useEffect } from "react";
import { getUpcoming } from "../../get";
import {
  Box,
  H4,
  Li,
  Section,
  Ul,
  Div,
  ImageBackground,
} from "../../styles";
import { Buttons } from "./buttons/buttons";


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
      <Buttons actualPage={"main"}/>
      <Ul>
        {Upcoming.map((film, index) => {
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
        })}
      </Ul>
    </Section>
  );
};

export default Main;
