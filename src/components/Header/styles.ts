import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 10em;
  background-color: #202020;
  justify-content: center;
  align-items: center;
  gap: 0.1%;
  border-bottom: 0.4em solid #61dbfb;
  box-shadow: 0px 0px 20px #00000029;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: fit-content;
  box-sizing: border-box;
  padding: 1%;
`;

export const Text = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: #e4e4e4;
  font-family: Lucida Sans;
  font-size: calc(1.6vw + 1.6vh);
`;
