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
  padding: 2% 14% 0 14%;
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
  min-height: 100vh;

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
  font-weight: 100;
  color: white;
`;

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  padding-left: 7%;
  justify-content: center;
  align-items: center;
  height: 6vh;
  gap: 0.8%;

  @media (max-width: 768px) {
    padding-left: 0%;
  }
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  color: transparent;

  &:hover {
    background-color: #ff5733;
  }
`;
