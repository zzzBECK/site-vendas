import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ContentContainer = styled.div`
  flex-grow: 1; /* Isso faz com que o conteúdo ocupe o espaço disponível */
  display: flex;
  padding: 2% 14%;
  background-color: gray;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 20%;
  background-color: red;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: fit-content;
`;

export const WholeCard = styled.div`
  display: flex;
  width: 33%;
  height: 24em;
  box-sizing: border-box;
  background-color: blue;
  border: 1px solid black;
  padding: 0.5%;
`;

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: pink;
`;
