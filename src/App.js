import { createGlobalStyle } from "styled-components";
import title from "./assets/fonts/static/Montserrat-BoldItalic.ttf";
import font from "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import { Fotter } from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import {Details} from './components/details/details'
import Films from "./components/main/films";
import { Header } from "./components/header/header";
import { TopRated } from "./components/main/toprated";
import { Search } from "./components/main/search";
import { useState } from "react";

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
  @font-face {
    font-family: 'Roboto';
    src: url(${title}) FORMAT('truetype');
  } 
  @font-face {
    font-family: 'FontRest';
    src: url(${font}) FORMAT('truetype');
  } 
  body{
    margin:0;
    padding:0;
    height:100%;
    background-color:#363434;
    font-family:'FontRest', sans-serif;
  }
  html{
    height:100%;
  }
  
`;

export default App;
