import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Container>
      <Content>
        <FooterCard>
          <Title>Unsere Vergleiche</Title>
          <UnorderdList>
            <List>Kreditvergleich</List>
            <List>Kredit</List>
            <List>Autokredite</List>
            <List>Ratenkredite</List>
            <List>Umschuldungen</List>
            <List>Baufinanzierungen</List>
          </UnorderdList>
        </FooterCard>
        <FooterCard>
          <Title>Unternehmen</Title>
          <UnorderdList>
            <List>Über uns</List>
            <List>Jobs</List>
            <List>Presse</List>
            <List>FAQ</List>
          </UnorderdList>
        </FooterCard>
        <FooterCard>
          <Title>Kontakt</Title>
          <UnorderdList>
            <List>Partnerprogramm</List>
            <List>finanzcheckPRO - B2B Partnerlösung</List>
            <List>AGB</List>
            <List>Datenschutz</List>
            <List>Cookie-Präferenzen</List>
            <List>Impressum</List>
            <List>Kontakt</List>
          </UnorderdList>
        </FooterCard>
      </Content>
      <BottomFooter>
        <SubTitle>
          © 2021 FINANZCHECK.de Admiralitätstraße 60 - 20459 Hamburg
        </SubTitle>
        <SocialLinks>
          <Link>
            <SocialImg
              src="https://image.flaticon.com/icons/png/512/20/20837.png"
              alt=""
            />
          </Link>
          <Link>
            <SocialImg
              src="https://image.flaticon.com/icons/png/512/2111/2111499.png"
              alt=""
            />
          </Link>
          <Link>
            <SocialImg
              src="https://image.flaticon.com/icons/png/512/1384/1384028.png"
              alt=""
            />
          </Link>
        </SocialLinks>
      </BottomFooter>
    </Container>
  );
};

export default Footer;
const SocialImg = styled.img`
  width: 15px;
  height: 15px;
  display: flex;
  cursor: pointer;
`;
const Link = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
`;

const SubTitle = styled.span`
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
const Title = styled.span`
  color: #165297;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  margin: 48px 0 16px;
`;
const UnorderdList = styled.ul`
  list-style: none;
  margin: 16px;
  padding: 0;
`;
const List = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin: 8px 0 0;
  color: #7b8a96;
  text-align: right;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: left;
  font-weight: 300;
`;
const FooterCard = styled.div`
  padding: 0 12px;
  width: 288px;
  height: 340px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: auto;
`;

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 64px;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
