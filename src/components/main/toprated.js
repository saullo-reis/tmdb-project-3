import { getTopRated } from "./get";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopRated = () => {
  const [filmsTopRated, setTopRated] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopRated();
      setTopRated(response.results)
    };
    fetchData();
  }, []);

  return (
    <SectionTopRated>
      <H2>Filmes bem ranqueados</H2>
        <Ul>
          {
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
            })
          }
        </Ul>
    </SectionTopRated>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  a {
    text-decoration: none;
  }
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

const SectionTopRated = styled.section`
    display:flex;
    align-items center;
    justify-content:center;
    flex-direction:column;
    padding:50px;
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

