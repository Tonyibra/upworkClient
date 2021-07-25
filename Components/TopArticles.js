import React from "react";
import styled from "styled-components";
const TopArticles = () => {
  return (
    <Container>
      <TextContainer>
        <Title>
          Der FINANZCHECK Kreditvergleich – unabhängig und kundenorientiert
        </Title>
        <Value>
          Auf der Suche nach einem passenden Kredit? FINANZCHECK.de findet für
          Sie das optimale Angebot! Ob klassischer Ratenkredit, zweckgebundener
          Kredit oder Kleinkredit: Mithilfe unseres Kreditvergleichs finden Sie
          bei über 20 Partnerbanken sicher und schnell die passende Lösung.
        </Value>
      </TextContainer>
      <TextContainer>
        <Title>Die FINANZCHECK.de Vorteile im Überblick</Title>
        <ValueContainer>
          <LeftValue>
            <Lamp
              loading="lazy"
              src="https://images.ctfassets.net/f6c1mtmq4qrb/6Ss14sEQwMGlNtwSkQtVHx/0e7d73b4d19bc1ceebdcedff288e957c/Gluehbirne_wei___FINANZCHECK.de.svg"
              alt=""
            />
          </LeftValue>
          <RightValue>
            <UnorderedList>
              <List>
                Wir bieten Ihnen einen unabhängigen und kostenlosen Vergleich
                von Kreditangeboten
              </List>
              <List>
                Wir holen für Sie individuelle Kreditangebote ein. Unsere
                Kreditanfragen sind SCHUFA-neutral, also ohne negative
                Auswirkung auf Ihren SCHUFA-Score
              </List>
              <List>
                Zusätzlich bieten wir Ihnen weitere Dienstleistungen rund um
                Ihren Kreditwunsch, z. B. unsere individuelle telefonische
                Beratung und technische Unterstützung, um die Bearbeitung Ihrer
                Kreditanfrage durch die Bank zu beschleunigen
              </List>
              <List>
                Mit FINANZCHECK.de gelangen Sie sicher und mühelos an Ihr
                Wunschdarlehen
              </List>
            </UnorderedList>
          </RightValue>
        </ValueContainer>
      </TextContainer>
      <TextContainer>
        <Title>Warum FINANZCHECK.de?</Title>
        <Value>
          FINANZCHECK.de ist Ihre erste Adresse, wenn es um günstige, sichere
          und seriöse Kredite geht. Ein Kredit ist etwas sehr Persönliches.
          Daher stehen Sie und Ihre Bedürfnisse bei uns immer im Mittelpunkt. Es
          gibt viele gute Gründe, weshalb Sie uns als Experten für Ihren
          individuellen Finanzierungswunsch vertrauen können:
        </Value>
      </TextContainer>
      <TextContainer>
        <Title>Weil wir eine ausgezeichnete Beratung haben</Title>
        <Value>
          Effektiver Jahreszins, Tilgungsmodalitäten, Haushaltsrechnung – bei
          Ihrer Suche nach dem passenden Kredit können viele Fragen auftauchen.
          Wir vermitteln daher nicht nur günstige Kredite, sondern kümmern uns
          wirklich um Ihr Anliegen. Sie haben jederzeit die Möglichkeit,
          persönlich mit einem unserer 170 erfahrenen Kreditberater zu sprechen.
          Dabei finden Sie gemeinsam mit Ihrem persönlichen Berater die passende
          Lösung für Ihr Finanzierungsvorhaben.
        </Value>
      </TextContainer>
      <TextContainer>
        <Title>Weil Ihre Daten bei uns sicher sind </Title>
        <ValueWrapper>
          <LeftWrapper>
            <img
              loading="lazy"
              src="https://images.ctfassets.net/f6c1mtmq4qrb/3M6E4Ieb084b4YF6mwWNtt/182bb34710b5018af0e6c8e693a7a884/TK43790_Zertifikat_FFG-Finanzcheck-T__V-gepr__ftes-Onlineportal_Vermittlungsservice-2020.svg?h=74&fm=png&fl=png8"
              alt=""
            />
          </LeftWrapper>
          <RightWrapper>
            Wir legen größten Wert auf den Schutz Ihrer Daten. Wir wissen Ihr
            Vertrauen zu schätzen. Daher ist uns der gewissenhafte Umgang mit
            Ihren sensiblen Daten auch enorm wichtig. Unsere hohen Standards im
            Bereich der Datensicherheit haben wir daher auch dieses Jahr wieder
            für Sie vom TÜV Saarland prüfen lassen.
          </RightWrapper>
        </ValueWrapper>
      </TextContainer>
      <TextContainer>
        <Title>Weil Sie bei uns sparen können</Title>
        <Value>
          FINANZCHECK.de kooperiert mit über 20 Partnerbanken in ganz
          Deutschland. Ihr Vorteil: Wir vergleichen die Angebote der Banken
          miteinander, suchen Ihnen das passende Angebot und finden so Ihren
          Wunschkredit.
        </Value>
      </TextContainer>
      <TextContainer>
        <Title>Weil Sie mit uns schnell und effizient zum Kredit kommen</Title>
        <Value>
          Wir holen für Sie mithilfe unserer Datenschnittstellen individuelle
          Kreditangebote in Echtzeit, d.h. binnen weniger Minuten ein. Der
          Abschluss des Kreditvertrages bei der Bank kann ebenfalls
          softwaregestützt erfolgen, so dass Sie binnen kürzester Zeit über Ihr
          Geld verfügen können. Auch die Abwicklung des Kreditvertrags und die
          Auszahlung des Geldes erfolgen schnell, in vielen Fällen schon
          innerhalb einer Woche. Schließen Sie Ihren Kredit komplett digital ab,
          erhalten Sie Ihr Geld sogar noch schneller. Wir bieten im Zuge unseres
          Kreditvergleichs sichere und schnelle Legitimationsverfahren an, die
          Ihren Kreditantrag beschleunigen. Wählen Sie ganz entspannt zwischen
          Videoident, das Sie bequem von Zuhause aus nutzen können, oder dem
          klassischen Postident-Verfahren.
        </Value>
      </TextContainer>
      <TextContainer>
        <Title>Weil unsere Auszeichnungen für uns sprechen</Title>
        <Value>
          99,3 Prozent der Kreditnehmer sind mit unseren Leistungen absolut
          zufrieden. Damit haben wir als Onlinevergleichsportal eine
          überdurchschnittlich hohe Kundenzufriedenheit. Damit dies auch so
          bleibt und wir in Zukunft noch besser werden, arbeiten wir jeden Tag
          daran, unseren Service für Sie weiter zu verbessern.
        </Value>
      </TextContainer>
    </Container>
  );
};

export default TopArticles;

const LeftWrapper = styled.div`
  display: block;
  float: left;
  margin-right: 8px;
  margin-bottom: 8px;
`;
const RightWrapper = styled.div`
  display: flex;
  max-width: 600px;
`;
const ValueWrapper = styled.div`
  background-color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  padding: 16px 0;
  position: relative;
  width: 100%;
  flex-direction: row;
`;

const UnorderedList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin-bottom: 16px;
  padding-left: 1.2em;
  font-family: "Lato", sans-serif;
`;

const List = styled.li`
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  font-family: "Lato", sans-serif;
`;

const Lamp = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
`;

const ValueContainer = styled.div`
  background-color: #7397c1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  padding: 16px 0;
  position: relative;
  width: 100%;
  flex-direction: row;
  font-family: "Lato", sans-serif;
`;
const LeftValue = styled.div`
  border-right: 1px solid #e5e8ea;
  margin-right: 12px;
  padding-left: 24px;
  width: 50px;
`;
const RightValue = styled.div`
  display: flex;
  max-width: 600px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Lato", sans-serif;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.span`
  color: #165297;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.33333;
  margin: 48px 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 750px;
`;
const Value = styled.span`
  color: #7b8a96;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 1.5;
  min-width: 300px;
  text-rendering: optimizeLegibility;
  max-width: 750px;
`;
