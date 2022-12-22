import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icone.png";
import { useState } from "react";
import "./mediaq.css"
import { TopRated } from "./toprated";
import Films from "./films";
import { Header } from "../header/header";

const Main = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const parentToChild = () => {
    setData(name);
  };

  document.addEventListener("keypress", function (enter) {
    if (enter.key === "Enter") {
      parentToChild();
    }
  })
  return (
    <Section>
      <Div>
        <Link to={"/emAlta"}>Filmes em Alta</Link>
        <Link to={"/bemRanqueados"}>Filmes bem ranqueados</Link>
      </Div>
      <Films data={data} />
    </Section>
  );
};


const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
  
`
const Div = styled.div`
  margin-bottom:20px;
  a{
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
}
`
export default Main;
