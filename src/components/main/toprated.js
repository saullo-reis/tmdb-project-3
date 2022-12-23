import { getTopRated } from "./get";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";

export const TopRated = () => {
  const [filmsTopRated, setTopRated] = useState([]);
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
        const response = await getTopRated(count);
        setTopRated(response.results);
        setRemoveLoading(true);
      };
      fetchData();
    }, 300);
  }, [count]);

  return (
    <SectionTopRated>
      <Div>
        <Link to={"/Upcoming"}>Lançamento</Link>
        <Link to={"/emAlta"}>Filmes em Alta</Link>
        <Link
          to={"/bemRanqueados"}
          style={{ background: "red", color: "white" }}
        >
          Filmes bem ranqueados
        </Link>
      </Div>
      <H2>Filmes bem ranqueados</H2>
      <Ul>
        {filmsTopRated.length > 0 &&
          filmsTopRated.map((film, index) => {
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
    </SectionTopRated>
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

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  a {
    text-decoration: none;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow:row wrap;
  
  h1{
    text-align:center;
  }
  a{
    margin-bottom:5px;
    text-decoration:none;
    font-weight:bold;
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
  text-align: center;
`;

const SectionTopRated = styled.section`
    display:flex;
    align-items center;
    justify-content:center;
    flex-direction:column;
    padding:30px;
    ul{
      display:flex;
      align-items:center;
      justify-content:center;
    }

    div{
        display: flex;
        flex-flow:wrap row;  
    }
    p{
        font-weight:bold;
        margin:10px;
        color:white;
        transition:1s;
        padding:10px;
        border-radius:20px;
        cursor:pointer;
        
        :hover{
            background-color: #cc0000;
        }
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

const H4 = styled.p`
  display: none;
  text-align: center;
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
  margin-bottom: 60px;
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
