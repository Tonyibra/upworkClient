import React, { useState } from "react";
import styled from "styled-components";
import Hero from "/public/images/hero.png";
import Image from "next/image";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Landing = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  return (
    <Container>
      <Text>
        <HeaderText>Die Kreditexperten</HeaderText>
        <BottomText>Online vergleichen, persönlich beraten</BottomText>
      </Text>
      <CardContainer>
        <Card>
          <TextField
            id="filled-basic"
            label="wunschbetrag"
            variant="filled"
            value={value1}
            style={{ width: "350px" }}
            onChange={(e) => setValue1(e.target.value)}
          ></TextField>
          <FormControl variant="filled" style={{ padding: "24px 0 " }}>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              style={{ width: "350px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Lorem</MenuItem>
              <MenuItem value={20}>ipsum</MenuItem>
              <MenuItem value={30}>dollar</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              style={{ width: "350px" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Lorem</MenuItem>
              <MenuItem value={20}>ipsum</MenuItem>
              <MenuItem value={30}>dollar</MenuItem>
            </Select>
          </FormControl>
          <ResultContainer>
            <Result>
              <span>
                Günstigster Kredit aus über 60 Angeboten ab:
                <br />
                <span>
                  <strong>141,94€</strong> Mtl. Rate
                </span>
              </span>
            </Result>
          </ResultContainer>
          <ButtonContainer>
            <Button variant="contained" color="primary">
              Kreditvergleich starten
            </Button>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Landing;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ResultContainer = styled.div`
  padding: 24px 0;
  width: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Result = styled.div`
  background-color: #d0dcea;
  border-radius: 4px;
  height: 56px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 1px;
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 70%;
  margin: auto;
`;

const Card = styled.div`
  background: #fff;
  height: 420px;
  width: 402px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-image: url("https://i.ibb.co/cJ8nJyz/hero.png");
  background-repeat: no-repeat;
  background-position: center;
`;
const Text = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.span`
  font-size: 40px;
  line-height: 56px;
  font-weight: 700;
  color: #165297;
  width: 564px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomText = styled.span`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  color: #165297;
`;
export async function getStaticProps(context) {
  const res = await fetch(``);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
