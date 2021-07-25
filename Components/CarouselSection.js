import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselSection = () => {
  return (
    <Container>
      <Text>Das sagen unsere Kunden</Text>
      <Carousel>
        <div style={{ padding: 20, height: 150 }}>
          <span>
            Alles top, nette kompetente Berater/innen Hat alles funktioniert,
            absol...
          </span>
        </div>
        <div>
          <span>
            Alles top, nette kompetente Berater/innen Hat alles funktioniert,
            absol...
          </span>
        </div>
        <div>
          <span>
            Alles top, nette kompetente Berater/innen Hat alles funktioniert,
            absol...
          </span>
        </div>
      </Carousel>
      <CarouselFooter>
        <div>
          <img
            loading="lazy"
            src="https://images.ctfassets.net/f6c1mtmq4qrb/FeGZkTtJ3XvTdD8s4tdua/a5f559b13acde1752eb2a519b6af4c9b/ekomi_gold_siegel_finanzcheck_de.png?h=74&fm=png&fl=png8"
            alt=""
          />
        </div>
        <Right>
          <Website>FINANZCHECK.de</Website>
          <Copyright>2194 Bewertungen</Copyright>
        </Right>
      </CarouselFooter>
    </Container>
  );
};

export default CarouselSection;

const Copyright = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  color: #165297;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

const Website = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  color: #7b8a96;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 16px;
`;
const CarouselFooter = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const Text = styled.span`
  color: #165297;
  font-size: 1.5em;
  padding-bottom: 30px;
`;
