import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 20px #00000029;
  flex-direction: column;
  background-color: white;
`;

export const ImageContainer = styled.div`
  position: relative;
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
  font-size: calc(1.2vw + 1.2vh);
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
  font-size: ${(props: IText) =>
    props.isDiscount ? "calc(0.6vw + 0.6vh)" : "calc(0.8vw + 0.8vh)"};
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
  align-items: baseline;
`;

export const Button = styled.div`
  display: flex;
  width: 18%;
  box-sizing: border-box;
  border: 0.1px solid #252525;
  border-radius: 1.2rem;
  padding: 0.3em;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  user-select: none;

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
  object-fit: fill;
  border-radius: 0.8rem 0.8rem 0 0;
  user-select: none;
`;

export const Title = styled.h1`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  font-family: Montserrat;
  font-size: calc(0.8vw + 0.8vh);
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

export const DiscountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff5733;
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0 0.8rem 0.8rem 0.8rem;
`;
