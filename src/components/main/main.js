import styled from "styled-components";
import { Link } from "react-router-dom";
import icon from "../../assets/images/icone.png";
import { useState } from "react";
import "./mediaq.css"
import { TopRated } from "./toprated";
import Films from "./films";

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
    <>
      <Header className="header">
        <Link to={"/"}>
          <H1>
            <img src={icon} />
          </H1>
        </Link>
        <div>
          <InputStyle
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Título do filme"
          />
          <Button onClick={() => parentToChild()}>Procurar</Button>
        </div>
      </Header>
      <Films data={data} />
      <Division/>
      <TopRated/>
    </>
  );
};

const Button = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  height: 40px;
  color: black;
  background-color: white;
  transition: 1.2s;
  :hover {
    transform: scale(1.1, 1.1);
    color: white;
    background-color: red;
  }
`;

const Division = styled.div`
  height:1px;
  background:black;
`
const InputStyle = styled.input`
  height: 30px;
  width: 60%;
  border: solid white 2px;
  margin-right: 10px;
  padding: 5px;
  background-color: black;
  background-opacity: 0.5;
  color: white;
  target: {
    border: white 3px solid;
  }
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#000000, #363434);
  padding: 20px;
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
  letter-spacing: 2px;
  border-radius: 900px;
  width: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1.1s;
  background-color: white;
  cursor: pointer;
  box-shadow: 5px 2px 2px black;
  :hover {
    background-color: red;
  }
  img {
    width: 100px;
  }
`;

export default Main;
