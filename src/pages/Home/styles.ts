import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  box-sizing: border-box;
`;

export const ContentContainer = styled.div`
  flex-grow: 1; /* Isso faz com que o conteúdo ocupe o espaço disponível */
  display: flex;
  padding: 2% 14%;
  background-color: white;
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
  height: 30em;
  box-sizing: border-box;
  padding: 0.5%;

  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: pink;
`;
