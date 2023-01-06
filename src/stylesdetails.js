import styled from "styled-components";

export const H2 = styled.h1`
  font-size: 40px;
  color: #ffffff;
  margin: 20px 0 20px 0;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-shadow: 5px 2px 2px black;
`;

export const Box = styled.div`
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

export const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  a {
    text-decoration: none;
  }
`;
export const H4 = styled.p`
  display: none;
  color: white;
`;
export const Li = styled.li`
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

export const Img = styled.img`
  border-radius: 10px;
  height: 290px;
  box-shadow: 5px 2px 2px black;
`;

export const Infos = styled.section`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px;
  height:150px;
  width:300px;
  text-align:center;
  h3 {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-shadow: 3px 3px black;
    text-align:center;
  }
`;
export const SectionSimilar = styled.section`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  h1{
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
  }
  }
  ul{
    display:flex;
    align-items:center;
    justify-content:center;
  }
`

export const Section = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

export const PhotoAndInfos = styled.section`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;



export const PhotoAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align:center;
    font-size: 20px;
    width:320px;
    height:70px;
    font-weight: bold;
    text-shadow: 3px 3px black;
  }
`;

export const Division = styled.div`
  width: 100%;
  height: 3px;
  background-color: #000000;
  margin: 10px 0 10px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const Production = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  width: 140px;
  transition: 1.7s;
  font-weight: bold;
  div {
    display: none;
  }
  h2 {
    text-shadow: 3px 3px black;
    transition: 1.7s;
  }
  img {
    margin: 10px;
  }
  :hover {
    div {
      display: flex;
      margin: 50px;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 480px;
      z-index: 2;
      background-color: white;
      color: black;
      padding: 20px;
    }
    h2 {
      color: red;
    }
  }
`;

export const OverView = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  width: 130px;
  margin-bottom: 30px;
  text-align:center;
  h2 {
    cursor: pointer;
    text-shadow: 3px 3px black;
    transition: 1.7s;
  }
  div {
    display: none;
    width: 300px;
    margin: 20px;
  }
  :hover {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 450px;
      color: black;
      z-index: 2;
      background-color: white;
      padding: 20px;
      font-weight: bold;
    }
    h2 {
      color: red;
    }
  }
`;
export const Gen = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  width: 130px;
  margin-bottom: 30px;
  h2 {
    transition: 1.7s;
    text-shadow: 3px 3px black;
  }
  div {
    display: none;
    margin: 0;
  }
  :hover {
    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: absolute;
      top: 410px;
      z-index: 2;
      background-color: white;
      color: black;
      padding: 20px;
      font-weight: bold;
    }
    h2 {
      color: red;
    }
  }
`;
