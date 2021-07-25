import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import Image from "next/image";
import phone from "../images/phone.svg";
const Header = () => {
  return (
    <NavBar>
      {/* left */}
      <LogoContainer>
        <Image src={logo} width={275} height={25} />
      </LogoContainer>
      {/* right */}
      <Right>
        <Text>
          <HeaderText>Kostenlose Beratung</HeaderText>
          <HeaderText>0800 433 88 77 66</HeaderText>
        </Text>
        <Phone>
          <Image src={phone} width={20} height={22} />
        </Phone>
      </Right>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  margin-inline: auto;
`;
const LogoContainer = styled.div`
  padding: 28px 0;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderText = styled.span`
  color: #165297;
  font-size: 16px;
  text-align: right;
  line-height: 19px;
  letter-spacing: normal;
  padding: 0px 16px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Phone = styled.div`
  border: 2px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    border: 2px solid #165297;
  }
`;
