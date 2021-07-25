import React from "react";
import styled from "styled-components";
const Trusted = () => {
  return (
    <Container>
      <Articles>
        <Left>
          <Content>
            <Paragraph>
              <div>
                <ImageSide
                  loading="lazy"
                  src="https://images.ctfassets.net/f6c1mtmq4qrb/FeGZkTtJ3XvTdD8s4tdua/a5f559b13acde1752eb2a519b6af4c9b/ekomi_gold_siegel_finanzcheck_de.png?h=74&fm=png&fl=png8"
                  alt=""
                />
              </div>

              <Text>
                eKomi ist ein unabhängiges Bewertungssystem, welches Kunden
                ermöglicht, FINANZCHECK.de zu bewerten und auch Kommentare zu
                hinterlassen. Unsere eKomi-Bewertungen beweisen: Über 15.000
                Kunden bewerten unseren Service positiv. Unsere effiziente und
                kompetente Kreditabwicklung bringt Sie schnell auf den Weg zu
                Ihrem Wunschkredit.
              </Text>
            </Paragraph>
          </Content>
          <Content>
            <Paragraph>
              <div>
                <ImageSide
                  loading="lazy"
                  src="https://images.ctfassets.net/f6c1mtmq4qrb/6sDCeTjwuaoLWZ1wm4jxqC/9f2228cf19edb1895dba3d23a4ecb478/bewertet_pagebuilder_2020.png?w=150&h=150&fm=png&fl=png8"
                  alt=""
                />
              </div>

              <Text>
                Wenn es um Vertrauen geht, sind unsere Kunden bei uns in den
                besten Händen. Das zeigen nicht nur die positiven Bewertungen
                auf Bewertet.de, sondern auch die Weiterempfehlungen unserer
                zufriedenen Kunden. Mit Bewertet.de haben gerade Neukunden den
                Vorteil, Erfahrungsberichte und Bewertungen über FINANZCHECK.de
                zu lesen und auch selbst Beurteilungen zu verfassen. Dies ist
                nicht nur für Sie als Kunde optimal. Auch wir als Dienstleister
                können somit auf Feedback eingehen und unseren Service für Sie
                noch weiter verbessern.
              </Text>
            </Paragraph>
          </Content>
        </Left>
        <Right>
          <Content>
            <Paragraph>
              <div>
                <ImageSide
                  loading="lazy"
                  src="https://images.ctfassets.net/f6c1mtmq4qrb/6FVr1a7uKVx9HDbSdAVRpU/d2d1cfc58ad513f182fe2f93715b04fd/trustpilot_pagebuilder_2020.png?w=150&h=150&fm=png&fl=png8"
                  alt=""
                />
              </div>

              <Text>
                Die Community von Trustpilot sieht uns als kompetenten und
                vertrauenswürdigen Dienstleister an. Das fördert nicht nur
                unsere Beziehung zu unseren Kunden, sondern bietet diesen auch
                völlige Transparenz unseres Angebotes. Mit der
                Bewertungscommunity Trustpilot haben Sie als Kunde die
                Gelegenheit, FINANZCHECK.de besser kennenzulernen und von
                authentischem Feedback zu profitieren.
              </Text>
            </Paragraph>
          </Content>
          <Content>
            <Paragraph>
              <div>
                <ImageSide
                  loading="lazy"
                  src="https://images.ctfassets.net/f6c1mtmq4qrb/5t2kkg6PbEbJ96aWV7G5LL/30e2c4e311f149aec38f91d1a89cb4ac/ausgezeichnet_pagebuilder_2020.png?w=100&h=100&fm=png&fl=png8"
                  alt=""
                />
              </div>

              <Text>
                Auch die von Kunden abgegebenen Bewertungen und Kommentare auf
                ProvenExpert sprechen für sich: Sowohl unsere Beratung als auch
                die Kreditabwicklung werden durchweg positiv von unseren Kunden
                bewertet. Dadurch können Sie sich sicher sein, dass Sie mit uns
                schnell und mühelos zu Ihrem Wunschkredit gelangen. Mit
                Ausgezeichnet.org haben Sie als Kunde die Möglichkeit, sich
                selbst ein Bild von uns zu machen. Wie zufrieden waren Kunden
                mit unserer Beratung, unserem Service und dem Angebot an
                Krediten. Diese und andere Fragen werden auf ausgezeichnet.org
                beantwortet.
              </Text>
            </Paragraph>
          </Content>
        </Right>
      </Articles>
    </Container>
  );
};

export default Trusted;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;
const ImageSide = styled.img`
  display: block;
  float: left;
  margin-right: 8px;
  margin-bottom: 8px;
`;
const Articles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
`;
const Content = styled.div`
  max-width: 550px;
`;
const ImagePart = styled.div`
  display: inline-block;
`;
const Text = styled.span`
  color: #7b8a96;
  font-family: Lato, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  line-height: 1.5em;
  min-width: 300px;
  text-rendering: optimizeLegibility;
`;
