import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10em;
  background-color: white;
  gap: 0.1%;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  border-bottom: 1px solid #00000029;
  box-sizing: border-box;
  padding: 0 15%;
  gap: 5%;
  align-items: center;
`;

export const Text = styled.h1`
  display: flex;
  margin: 0;
  color: black;
  font-family: Montserrat;
  font-size: calc(0.7vw + 0.7vh);
  font-weight: 400;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 0.5%;
  width: 100%; /* Largura de 100% para ocupar todo o espaço disponível */
  height: 100%;
  box-sizing: border-box;
  padding: 4px;
  justify-content: flex-end;

  .socialContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3%;
    background-color: #333; /* Cor de fundo padrão dos ícones */
    border-radius: 50%;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #ff5733; /* Cor de fundo ao passar o mouse */
    }

    .socialSvg {
      width: 60%;
      height: 60%;
      fill: white; /* Cor dos ícones */
    }

    /* Adicione as classes para cada ícone */
    .containerOne {
      /* Estilos específicos para o primeiro ícone */
    }

    .containerTwo {
      /* Estilos específicos para o segundo ícone */
    }

    .containerThree {
      /* Estilos específicos para o terceiro ícone */
    }

    .containerFour {
      /* Estilos específicos para o quarto ícone */
    }
  }
`;
