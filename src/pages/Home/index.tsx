import Card from "../../components/Card";
import Header from "../../components/Header";
import {
  PageContainer,
  FooterContainer,
  ContentContainer,
  CardsContainer,
  WholeCard,
  FilterContainer,
} from "./styles";

import bule from "../../assets/bule.webp";
import bandeja from "../../assets/bandeja.webp";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <FilterContainer></FilterContainer>
        <CardsContainer>
          <WholeCard>
            <Card
              title={"Bandeja Decorativa"}
              price={199.99}
              descount={0}
              image={bule}
            />
          </WholeCard>
          <WholeCard>
            <Card
              title={"Bule de café"}
              price={299.99}
              descount={10}
              image={bandeja}
            />
          </WholeCard>
          <WholeCard></WholeCard>
          <WholeCard></WholeCard>
          <WholeCard></WholeCard>
        </CardsContainer>
      </ContentContainer>
      <FooterContainer></FooterContainer>
    </PageContainer>
  );
}
