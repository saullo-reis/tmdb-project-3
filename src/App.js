import { createGlobalStyle } from "styled-components";
import { Fotter } from "./components/footer/footer";
import {Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import {Details} from './components/details/details'
import Films from "./components/main/pages/trending-movies";
import { Header } from "./components/header/header";
import { TopRated } from "./components/main/pages/ranked-movies";
import { Search } from "./components/main/pages/search";
import { useState } from "react";
import { Upcoming } from "./components/main/pages/movies-in-release";

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
        <Route path="/TrendingMovies" element={<Films/>}/>
        <Route path="/RankedMovies" element={<TopRated/>}/>
        <Route path="/Search" element={<Search data={data}/>}/>
        <Route path="/movie/:id" element={<Details/>}/>
        <Route path="/MoviesInRelease" element={<Upcoming/>}/>
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
