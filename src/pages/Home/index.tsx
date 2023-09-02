import Card from "../../components/Card";
import Header from "../../components/Header";
import {
  CardsContainer,
  ContentContainer,
  FilterContainer,
  FooterContainer,
  PageContainer,
  WholeCard,
} from "./styles";

import bandeja from "../../assets/bandeja.webp";
import bule from "../../assets/bule.webp";
import Filter from "../../components/Filter";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <FilterContainer>
          <Filter />
        </FilterContainer>
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
          <WholeCard>
            <Card
              title={"teste2"}
              price={20.99}
              descount={99}
              image={bandeja}
            />
          </WholeCard>
          <WholeCard>
            <Card
              title={"test3"}
              price={123.99}
              descount={30}
              image={bandeja}
            />
          </WholeCard>
          <WholeCard>
            <Card
              title={"teste6"}
              price={124124.99}
              descount={15}
              image={bandeja}
            />
          </WholeCard>
          <WholeCard>
            <Card
              title={"teste4"}
              price={123123.99}
              descount={0}
              image={bandeja}
            />
          </WholeCard>
        </CardsContainer>
      </ContentContainer>
      <FooterContainer>© 2023 Todos os direitos reservados.</FooterContainer>
    </PageContainer>
  );
}
