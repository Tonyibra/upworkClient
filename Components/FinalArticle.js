import React from "react";
import styled from "styled-components";
const FinalArticle = () => {
  return (
    <Container>
      <Content>
        <Title>Weitere Angebote</Title>
        <SubTitle>
          Sie möchten mehr Informationen und brauchen noch weitere Fakten über
          Kredite und Finanzierungen? Dann schauen Sie doch auch mal bei unseren
          beiden Marken OFINA und Kredite.com vorbei. Dort finden Sie nicht nur
          alles Wichtige zur Kreditaufnahme, zu Kreditarten und zu passenden
          Finanzierungsangeboten, sondern auch Ratgeber zu Themen wie
          Zahnersatzfinanzierung, Kosten von Steuerberatern und vieles mehr.
        </SubTitle>
      </Content>
    </Container>
  );
};

export default FinalArticle;

const Content = styled.div`
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.span`
  color: #165297;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.6;
  margin: 48px 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: Lato, Helvetica, Arial, sans-serif;
`;
const SubTitle = styled.span`
  color: #7b8a96;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 1.5;
  width: 100%;
  padding-right: 30px;
  text-rendering: optimizeLegibility;
`;
