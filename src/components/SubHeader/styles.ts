import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  color: black;
  font-family: Montserrat;
  font-size: calc(0.7vw + 0.7vh);
  background-color: white;
`;

export const Logo = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 40%;
  align-items: center;
  gap: 12px;

  svg {
    font-size: 24px;
  }
`;

export const SearchBar = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: solid 1px #ccc;
`;

export const UserIcon = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: 12px;

  svg {
    font-size: 24px;
    color: "#333";
    font-weight: 500;
  }

  span {
    color: "#333";
    font-weight: 500;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 60%;
  box-sizing: border-box;
  gap: 2%;
  justify-content: flex-end;
`;
