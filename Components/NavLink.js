import React from "react";
import styled from "styled-components";
const NavLink = () => {
  return (
    <Container>
      <Left>
        <Links>
          <span>Kreditvergleich</span>
        </Links>
        <Links>
          <span>Kredit</span>
        </Links>
        <Links>
          <span>Autokredit</span>
        </Links>
        <Links>
          <span>Ratenkredit</span>
        </Links>
        <Links>
          <span>Baufinanzierung</span>
        </Links>
        <Links>
          <span>Karriere</span>
        </Links>
      </Left>
      <Right>
        <Link>
          <span>Kundenbereich</span>
        </Link>
      </Right>
    </Container>
  );
};

export default NavLink;

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  color: #7b8a96;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    color: #62686e;
  }
`;
const Link = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  color: #165297;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div``;
