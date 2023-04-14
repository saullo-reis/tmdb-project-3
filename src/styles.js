import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 5px;
  background-color: white;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 0 5px 0 5px;
  font-size: 30px;
  transition: 1.2s;
  :hover {
    background-color: red;
    color: white;
  }
`;

export const Box = styled.div`
  border-radius: 10px;
  height: 290px;
  box-shadow: 5px 2px 2px black;
  background-color: #000;
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

export const Img = styled.img`
  border-radius: 10px;
  height: 290px;
  :hover{
    padding:0 0 5px 5px;
    background-color:#cc0000;
  }
`;

export const ImageBackground = styled.div`
  width: 200px;
  height: 300px;
  transition:1.1s;
`;

export const SectionFilms = styled.section`
  margin-bottom: 60px;
  padding: 30px;
`;

export const Div = styled.div`
    flex-flow:row wrap;
    margin-bottom:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
    text-align:center;
    }
    a{
    text-shadow: 2px 2px 15px black;
    text-decoration:none;
    font-weight:bold;
    margin-bottom:5px;
    background-color:white;
    border-radius:8px;
    margin-left:20px;
    color:black;
    padding:10px;
    transition:1.2s;
`;

export const H2 = styled.h1`
  font-size: 40px;
  color: #ffffff;
  margin: 20px 10px 20px 10px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  text-shadow: 5px 2px 2px black;
`;

export const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
`;
export const H4 = styled.p`
  display: none;
  color: white;
  text-align: center;
`;
export const Li = styled.li`
  list-style: none;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-bottom: 60px;
  cursor: pointer;
  transition: .7s;
  &:hover{
    transform:scale(1.2);
  }
`;

export const Section = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:150px 0
`

export const SectionTopRated = styled.section`
display:flex;
align-items center;
justify-content:center;
flex-direction:column;
padding:30px;
ul{
  display:flex;
  align-items:center;
  justify-content:center;
}

div{
    display: flex;
    flex-flow:wrap row;  
}
p{
    font-weight:bold;
    margin:10px;
    color:white;
    transition:1s;
    padding:10px;
    border-radius:20px;
    cursor:pointer;
    
    :hover{
        background-color: #cc0000;
    }
}
`;