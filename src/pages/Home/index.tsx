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
              descount={20}
              image={bandeja}
            />
          </WholeCard>
          <WholeCard>
            <Card
              title={"Testando"}
              price={100.99}
              descount={10}
              image={bule}
            />
          </WholeCard>
          <WholeCard>
            <Card
              title={"Call of Duty"}
              price={499.99}
              descount={0}
              image={bandeja}
            />
          </WholeCard>
          <WholeCard>
            <Card title={"GTA V"} price={12349.99} descount={50} image={bule} />
          </WholeCard>
          <WholeCard>
            <Card title={"Prato"} price={20.99} descount={99} image={bandeja} />
          </WholeCard>
        </CardsContainer>
      </ContentContainer>
      <FooterContainer></FooterContainer>
    </PageContainer>
  );
}
