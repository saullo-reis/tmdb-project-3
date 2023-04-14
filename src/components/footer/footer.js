import styled from "styled-components";

export const Fotter = () => {
  return (
    <Section>
      <P>Projeto feito por: Saullo Reis</P>
      <P>
        Utilizando a API do<h3>TMDB</h3>
      </P>
    </Section>
  );
};

const Section = styled.section`
  background-color: #000;
  color: #4f4f4f;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const P = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
