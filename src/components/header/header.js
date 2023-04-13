import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = ({childToParent}) => {
    const [data, setData] = useState("");

    document.addEventListener("keypress", function (enter) {
        if (enter.key === "Enter") {
            childToParent(data);
        }
      })
    return(
        <Section className="header">
        <Link to={"/"}>
          <H1 data-testid='logo'>
            <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Tmdb-312x276-logo.png" />
          </H1>
        </Link>
        <div>
          <InputStyle
            value={data}
            onChange={(e) => setData(e.target.value)}
            type="text"
            placeholder="Título do filme"
          />
          <Link to={"/search"}><Button onClick={() => childToParent(data)}>Procurar</Button></Link>
        </div>
      </Section>
    )
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding: 20px;
  border-bottom: solid .1px gray;
  a {
    text-decoration: none;
  }
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
  font-family: "Roboto", sans-serif;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100px;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-top:10px;
  margin-bottom:30px;
  padding: 10px;
  height: 40px;
  color: black;
  background-color: white;
  transition: 1.2s;
  :hover {
    transform: scale(1.1, 1.1);
    color: white;
    background-color: #00BFFF;
  }
`;

const InputStyle = styled.input`
  height: 30px;
  width: 60%;
  border: solid #00BFFF 1px;
  border-radius: 8px;
  margin-right: 10px;
  padding: 5px;
  background-color: black;
  background-opacity: 0.5;
  color: white;
  target: {
    border: white 3px solid;
  }
  ::placeholder{
    color: white;
  }
`;
