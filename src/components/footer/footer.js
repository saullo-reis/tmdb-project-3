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
  background: linear-gradient(#363434, #000000);
  color: #4f4f4f;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
