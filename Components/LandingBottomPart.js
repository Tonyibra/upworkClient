import React from "react";
import styled from "styled-components";
const LandingBottomPart = () => {
  return (
    <Container>
      <ImageContainer>
        <img
          src="https://i.ibb.co/xmqD60w/copyright1.png"
          alt=""
          style={{ margin: "0px 8px" }}
        />
        <img
          src="https://i.ibb.co/hW5PwjR/copy2.png"
          alt=""
          style={{ margin: "0px 8px" }}
        />
        <img
          style={{ margin: "0px 8px" }}
          src="https://images.ctfassets.net/f6c1mtmq4qrb/5TBxfupu1IHFuPjPT1RCwf/0da21036456d99e899e379ee3a083f92/top-zins-garantie-seal.png?h=74&fm=png&fl=png8"
          alt=""
        />
      </ImageContainer>
      <Paragraph>
        ¹-0,4% Effektiver Jahreszins bei: 1.000€ Netto-Darlehensbetrag, 12
        Monate Laufzeit, 0,00% fester Sollzins p.a., monatliche Rate 83,15€,
        Gesamtbetrag 997,83€, Fidor Bank | Entspricht zugleich dem
        repräsentativen Beispiel gem. § 6a PAngV. Kredit erfordert
        Online-Kontoauszug (Kontoblick) und Eröffnung eines Girokontos bei der
        Fidor Bank. Das Girokonto ist während der Kreditlaufzeit kostenlos.
      </Paragraph>
    </Container>
  );
};

export default LandingBottomPart;

const ImageContainer = styled.div`
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Paragraph = styled.p`
  max-width: 570px;
  display: flex;
  align-items: center;
`;
