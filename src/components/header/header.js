import { useState, useEffect } from "react";
import styled from "styled-components";
import icon from "../../assets/images/icone.png";
import { Link } from "react-router-dom";

export const Header = ({childToParent}) => {

    const [name, setName] = useState("");
    const [data, setData] = useState(name);

    document.addEventListener("keypress", function (enter) {
        if (enter.key === "Enter") {
            childToParent(data);
        }
      })
    return(
        <SectionHeader className="header">
        <Link to={"/"}>
          <H1>
            <img src={icon} />
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
      </SectionHeader>
    )
}

const SectionHeader = styled.section`
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
    background-color: red;
  }
`;

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
