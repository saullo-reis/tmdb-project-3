import styled from "styled-components";
import { Link } from "react-router-dom";
import "./mediaq.css"
import { useState, useEffect } from "react";
import { getUpcoming } from "./get";

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
      </Ul>
    </Section>
  );
};
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

const H2 = styled.h1`
  font-size: 40px;
  color: #ffffff;
  margin: 20px 0 20px 0;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-align:center;
  text-shadow: 5px 2px 2px black;
`;

const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:30px 0 30px 0;
`
const Div2 = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
`

const Div = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-flow: row wrap;
  margin-bottom:20px;
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
}
`
export default Main;
