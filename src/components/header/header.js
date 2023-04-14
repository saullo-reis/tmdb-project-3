import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import "../../animation.css"

export const Header = ({ childToParent }) => {
  const [data, setData] = useState("");
  const navigate = useNavigate()
  const [showInput, setShowInput] = useState(false)

  document.addEventListener("keypress", function (enter) {
    if (enter.key === "Enter") {
      childToParent(data);
      navigate('/search')
    }
  })

  function searchClick(){
    childToParent(data)
    navigate('/search')
  }

  function handleClick() {
    if(showInput === false){
      setShowInput(true)
    }
    else{
      setShowInput(false)
    }
  }

  return (
    <Section className="header">
      <Link to={"/"}>
        <H1 data-testid='logo'>
          <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Tmdb-312x276-logo.png" />
        </H1>
      </Link>
      <div className="search">
        <AiOutlineSearch onClick={() => { handleClick() }} />
        <InputStyle
          style={{display: showInput === true ? "block" : "none"}}
          className="input"
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
          placeholder="Título do filme"
        />
        <Button style={{ display: showInput === true ? "block" : "none" }} onClick={() => searchClick()}>Procurar</Button>
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
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .search{
    display:flex;
    align-items: center;
    justify-content: center;
    svg{
      color: white;
      font-size: 30px;
      padding: 2px;
      border-radius: 100%;
      cursor: pointer;
    }
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
  padding: 10px;
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
  border: solid white 1px;
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
