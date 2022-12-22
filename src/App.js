import { createGlobalStyle } from "styled-components";
import title from "./assets/fonts/static/Montserrat-BoldItalic.ttf";
import font from "./assets/fonts/Montserrat-VariableFont_wght.ttf";
import { Fotter } from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import {Details} from './components/details/details'
import Films from "./components/main/films";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/emAlta" element={<Main><Films/></Main>}/>
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
