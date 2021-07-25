import React from "react";
import styled from "styled-components";
const BottomList = () => {
  return (
    <Container>
      <Content>
        <Left>
          <Title>Ratenkredit</Title>
          <SubTitle>
            Die klassische Option für die Kreditaufnahme ist der Ratenkredit.
            Hier tilgen Sie das Kreditvolumen plus Zinsen durch monatliche,
            zuvor festgelegte Raten. Deren Höhe bemisst sich an Faktoren wie der
            Kreditsumme, Laufzeit und Ihrer persönlichen Bonität.
          </SubTitle>
          <Title>Autokredit</Title>
          <SubTitle>
            Der zweckgebundene Autokredit nimmt den finanzierten PKW als
            Sicherheit. Daher erhalten Sie in diesem Bereich oft besonders gute
            Angebote, die FINANZCHECK.de für Sie listet. Beim Autokredit handelt
            es sich um eine Form des Ratenkredits.
          </SubTitle>
          <Title>Umschuldung</Title>
          <SubTitle>
            Durch die Umschuldung können Sie ein Darlehen mit schlechten
            Zinskonditionen, längeren Laufzeiten oder den Wegfall oder Ergänzung
            eines Kreditnehmers ablösen. Es ist möglich, einen oder mehrere
            Kredite umzuschulden. Wir beraten Sie gerne bei allen Fragen, z.B.
            auch zum Thema Vorfälligkeitsentschädigung oder
            Absicherungsmöglichkeiten.
          </SubTitle>
          <Title>Baufinanzierung</Title>
          <SubTitle>
            Kredite rund um die Baufinanzierung sind zweckgebundene Kredite mit
            dem Grundstück oder der Immobilie als Sicherheit. Rabatte in der
            Baufinanzierung lassen sich erzielen, wenn Eigenkapital vorhanden
            ist und keine 100-Prozent-Finanzierung gewählt wird – passende
            Angebote bieten wir Ihnen gern in Zusammenarbeit mit unserem Partner
            ImmobilienScout24, dem führenden Immobilienportal im
            deutschsprachigen Raum.
          </SubTitle>
        </Left>
        <Right>
          <Title>Kredit für Selbstständige</Title>
          <SubTitle>
            Selbstständige gelten häufig als Risikogruppe und haben es daher bei
            der Suche nach Darlehen besonders schwer, da z.B. bei Krankheit die
            direkten Einnahmen wegfallen. FINANZCHECK.de zeigt Ihnen im
            Kreditvergleich gerne geeignete Kredite, die Sie auf dem Weg in die
            Selbstständigkeit und darüber hinaus benötigen.
          </SubTitle>
          <Title>Privatkredit</Title>
          <SubTitle>
            Mit dem Begriff "Privatkredit" kann sowohl ein Kredit an
            Privatpersonen gemeint sein als auch ein Darlehen, das nicht von
            Banken, sondern von privaten Geldgebern gewährt wird. Beim Kredit an
            Privatpersonen erfüllen Sie sich mit dem Privatkredit kleine und
            größere Träume, vielleicht einen Urlaub oder neue Möbel.
          </SubTitle>
          <Title>Renovierungskredit</Title>
          <SubTitle>
            Beim Renovierungskredit können Sie Malerarbeiten, Arbeiten an der
            Fassade oder komplette Sanierungen von Immobilien finanzieren.
            FINANZCHECK.de zeigt Ihnen passende Kredite, welche sich für Ihre
            Renovierung, Modernisierung oder Sanierung besonders eignen.
          </SubTitle>
          <Title>Kleinkredit</Title>
          <SubTitle>
            Schon kleine Wünsche können zur Aufnahme eines Kleinkredits führen.
            Dabei handelt es sich um Darlehen, deren Summe 10.000 Euro nicht
            überschreitet. FINANZCHECK.de hilft dabei, den günstigsten
            Kleinkredit zu finden – oft ganz ohne zusätzlich erforderliche
            Sicherheiten.
          </SubTitle>
        </Right>
      </Content>
    </Container>
  );
};

export default BottomList;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 550px;
  padding: 0 12px;
`;

const Title = styled.span`
  color: #165297;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  margin: 48px 0 16px;
`;
const SubTitle = styled.span`
  background-color: #fff;
  color: #7b8a96;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 1.5;
  min-width: 300px;
  text-rendering: optimizeLegibility;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 550px;
  padding: 0 12px;
`;

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
