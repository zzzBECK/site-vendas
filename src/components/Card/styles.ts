import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 20px #00000029;
  flex-direction: column;
  background-color: #e4e4e4;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  box-sizing: border-box;
  border-radius: 0.8rem;
`;

export const TitleContainer = styled.h1`
  display: flex;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  margin: 0;
  font-family: Montserrat;
  font-size: 1.2vw;
  padding: 4% 6% 0 6%;
`;

interface IText {
  isDiscount: boolean;
}

export const Text = styled.h1<IText>`
  display: flex;
  box-sizing: border-box;
  margin: 0;
  font-family: Montserrat;
  font-size: 1.2vw;

  ${(props: IText) =>
    props.isDiscount &&
    `
  color: #ff5733;
  text-decoration: line-through;
  `}
`;

export const Value = styled.div`
  display: flex;
  width: 100%;
  gap: 5%;
`;

export const Button = styled.div`
  display: flex;
  height: 80%;
  width: 15%;
  box-sizing: border-box;
  border: 0.1px solid #252525;
  border-radius: 1.2rem;
  padding: 0.3em;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    border: none;
    background-color: #ff5733;
  }
`;

export const Svg = styled.svg`
  height: 100%;
`;

export const Image = styled.img`
  display: flex;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0.8rem 0.8rem 0 0;
`;

export const Title = styled.h1`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  font-family: Montserrat;
  font-size: 1.2vw;
  border-bottom: 1px solid #00000029;
  color: #252525;
  align-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  padding: 2% 6%;
  justify-content: space-between;
  align-items: center;
`;
