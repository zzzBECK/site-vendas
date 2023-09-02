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
  padding: 0.4%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 0%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  box-sizing: border-box;
  width: 100%;
  height: 15vh;
  background-color: #ff5733;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: calc(0.8vw + 0.8vh);
  color: black;
`;
