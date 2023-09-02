import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /* box-shadow: 0px 0px 20px #00000029;
  border-radius: 0.8rem; */
  gap: 2%;
  padding-left: 4%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 4%;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;

  font-family: Montserrat;
  font-size: calc(1vw + 0.5vh);
`;

export const OptionsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`;

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #333;
  border-radius: 3px;
  margin-right: 8px;
  cursor: pointer;

  transition: background-color 0.3s ease-in-out;
  transition: border 0.3s ease-in-out;

  &:checked {
    background-color: #ff5733;
    border: 2px solid #ff5733;
  }
`;

export const CheckboxLabel = styled.span`
  font-size: calc(0.5vw + 0.5vh);
  font-family: Montserrat;
  font-weight: 400;
`;
