import { createGlobalStyle } from "styled-components";
import title from "./assets/fonts/static/Montserrat-BoldItalic.ttf";
import font from "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import { Fotter } from "./components/footer/footer";
import {Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import {Details} from './components/details/details'
import Films from "./components/main/pages/films";
import { Header } from "./components/header/header";
import { TopRated } from "./components/main/pages/toprated";
import { Search } from "./components/main/pages/search";
import { useState } from "react";
import { Upcoming } from "./components/main/pages/upcoming";

function App() {
  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata)
  }
  
  return (
    <>
      <Header childToParent={childToParent}/>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/emAlta" element={<Films/>}/>
        <Route path="/bemRanqueados" element={<TopRated/>}/>
        <Route path="/search" element={<Search data={data}/>}/>
        <Route path="/movie/:id" element={<Details/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
      </Routes>
      <Fotter />
    </>  
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  body{
    margin:0;
    padding:0;
    height:100%;
    background-color:#000;
    font-family: 'Unbounded', cursive;
  }
  html{
    height:100%;
  }
  a{
    text-align:center;
  }
  
`;

export default App;
