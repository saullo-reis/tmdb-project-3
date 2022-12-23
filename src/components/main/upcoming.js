import styled from "styled-components";
import { getUpcoming } from "./get";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";

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

const Button = styled.button`
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0 5px 0 5px;
  font-size: 30px;
  transition: 1.2s;
  :hover {
    background-color: red;
    color: white;
  }
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

const Img = styled.img`
  border-radius: 10px;
  height: 290px;
  box-shadow: 5px 2px 2px black;
`;
const SectionFilms = styled.section`
  margin-bottom: 60px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Div = styled.div`
    flex-flow:row wrap;
    margin-bottom:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
    text-align:center;
    }
    a{
    text-decoration:none;
    font-weight:bold;
    margin-bottom:5px;
    background-color:white;
    border-radius:20px;
    margin-left:20px;
    color:black;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding:10px;
    transition:1.2s;
    :hover{
        background-color:red;
        color:white;
    }
`;

const H2 = styled.h1`
  font-size: 40px;
  color: #ffffff;
  margin: 20px 10px 20px 10px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-shadow: 5px 2px 2px black;
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
`;
const H4 = styled.p`
  display: none;
  color: white;
  text-align: center;
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
