import React from "react";
import styled from "styled-components";
const MidArticles = () => {
  return (
    <Container>
      <Content>
        <Title>Wie läuft der Kreditvergleich bei FINANZCHECK.de ab?</Title>
        <SubTitle>
          Unser Vergleich ist für Sie jederzeit transparent und völlig
          kostenfrei. Und so geht es:
        </SubTitle>
        <ListContainer>
          <OrderList type="1">
            <p>
              <List> Wunschkredit in den Vergleichsrechner eintragen.</List>
              <List>Aus mehreren Angeboten auswählen.</List>
              <List>Formular ausfüllen und persönliche Daten angeben.</List>
              <List>
                Optional: Unsere kostenlose Kontoblick-Funktion nutzen, um von
                den Vorteilen eines Online-Kredits zu profitieren.
              </List>
              <List>
                Individuelle Angebote von den Banken erhalten und auswählen.
              </List>
              <List>Auf Wunsch: Persönliche Beratung am Telefon einholen.</List>
              <List>
                Kreditvertrag unterschreiben (auch via digitaler Unterschrift
                möglich) und abschicken.
              </List>
              <List>
                Optional: Den Kredit komplett digital abschließen. Somit kann
                von einer schnelleren Auszahlung profitiert werden.
              </List>
              <List>
                Sobald die Bank die manuelle Kreditprüfung abgeschlossen hat,
                wird der Kreditbetrag schnellstmöglich ausgezahlt.
              </List>
            </p>
          </OrderList>
        </ListContainer>
        <Articles>
          <ArticleTitle>
            Unser Tipp: Schließen Sie Ihren Kredit komplett digital ab
          </ArticleTitle>
          <ArticleValue>
            Dank modernster Datenschnittstellen zu unseren Partnerbanken und
            geprüften Softwarelösungen, können Sie vollständig auf Papierkram
            verzichten und gleichzeitig von besonders günstigen Zinsen und einer
            schneller Auszahlung profitieren.
          </ArticleValue>
        </Articles>
        <Articles>
          <ArticleTitle>Videoident</ArticleTitle>
          <ArticleValue>
            Damit sichergestellt werden kann, dass es sich bei dem potenziellen
            Kreditnehmer tatsächlich um Sie handelt, müssen Sie sich bei der
            Bank identifizieren. Mit dem Videoident-Verfahren funktioniert dies
            einfach und unkompliziert. Dafür ist ein Gerät mit integrierter
            Kamera notwendig, beispielsweise Ihr Smartphone, Ihr Tablet oder Ihr
            Notebook. Im Videoident-Verfahren identifizieren Sie sich mit Ihrem
            Ausweisdokument bei einem unserer Partner, wie IDnow oder WebID.
            Dieser prüft ob alle Angaben korrekt und vollständig sind.
          </ArticleValue>
        </Articles>
        <Articles>
          <ArticleTitle>Videoident</ArticleTitle>
          <ArticleValue>
            Der Kontoblick ist für Sie: sicher und schnell. Die Bearbeitung
            Ihres Kreditantrags bei der Bank wird beschleunigt, da die
            erforderlichen Unterlagen für die Banken sofort abgerufen werden
            können. Für Sie entfällt der Aufwand, die Informationen und
            Nachweise umständlich zusammenzutragen und per Post einzusenden.
            Wenn Sie neben dem Kontoblick auf die elektronische Unterschrift
            setzen, ist außerdem ein rein digitaler Abschluss eines
            Kreditvertrags möglich.
          </ArticleValue>
        </Articles>
        <Articles>
          <ArticleTitle>Kontoblick</ArticleTitle>
          <ArticleValue>
            Der Kontoblick ist für Sie: sicher und schnell. Die Bearbeitung
            Ihres Kreditantrags bei der Bank wird beschleunigt, da die
            erforderlichen Unterlagen für die Banken sofort abgerufen werden
            können. Für Sie entfällt der Aufwand, die Informationen und
            Nachweise umständlich zusammenzutragen und per Post einzusenden.
            Wenn Sie neben dem Kontoblick auf die elektronische Unterschrift
            setzen, ist außerdem ein rein digitaler Abschluss eines
            Kreditvertrags möglich.
          </ArticleValue>
        </Articles>
        <Articles>
          <ArticleTitle>Welche Kredite bietet FINANZCHECK.de an?</ArticleTitle>
          <ArticleValue>
            Bei uns finden Sie alle gängigen Formen von Darlehen. Sie können
            sowohl Ratenkredite mit freiem Verwendungszweck aufnehmen als auch
            Ihre Auto- oder Urlaubsfinanzierung mit uns realisieren. Unsere
            Partnerbanken decken das komplette Spektrum ab.
          </ArticleValue>
        </Articles>
      </Content>
    </Container>
  );
};

export default MidArticles;

const Articles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ArticleTitle = styled.span`
  color: #165297;
  font-size: 1.2rem;
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
const ArticleValue = styled.span`
  color: #7b8a96;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 1.5;
  max-width: 700px;
  text-rendering: optimizeLegibility;
`;
const OrderList = styled.ol`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  text-align: left;
  margin-bottom: 16px;
  padding-left: 0;
`;
const List = styled.li`
  color: #7b8a96;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 1.5;
  min-width: 300px;
  text-rendering: optimizeLegibility;
  text-align: left;
`;
const Container = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; ;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.span`
  color: #165297;
  font-size: 1.2rem;
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
const ListContainer = styled.div``;
