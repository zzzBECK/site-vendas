import Card from "../../components/Card";
import Header from "../../components/Header";
import {
  CardsContainer,
  ContentContainer,
  FilterContainer,
  FooterContainer,
  PageContainer,
  WholeCard,
  Pagination,
  Button,
} from "./styles";

import bandeja from "../../assets/bandeja.webp";
import bule from "../../assets/bule.webp";
import Filter from "../../components/Filter";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Bandeja Decorativa",
    price: 199.99,
    descount: 0,
    image: bandeja,
  },
  {
    id: 2,
    title: "Bule de café",
    price: 299.99,
    descount: 20,
    image: bule,
  },
  {
    id: 3,
    title: "Testando",
    price: 100.99,
    descount: 10,
    image: bule,
  },
  {
    id: 4,
    title: "Call of Duty",
    price: 499.99,
    descount: 0,
    image: bandeja,
  },
  {
    id: 5,
    title: "GTA V",
    price: 12349.99,
    descount: 50,
    image: bule,
  },
  {
    id: 6,
    title: "Prato",
    price: 20.99,
    descount: 99,
    image: bandeja,
  },
  {
    id: 7,
    title: "teste2",
    price: 20.99,
    descount: 99,
    image: bule,
  },
  {
    id: 8,
    title: "test3",
    price: 123.99,
    descount: 30,
    image: bule,
  },
  {
    id: 9,
    title: "teste6",
    price: 124124.99,
    descount: 15,
    image: bule,
  },
  {
    id: 10,
    title: "teste4",
    price: 123123.99,
    descount: 0,
    image: bule,
  },

  {
    id: 11,
    title: "Bandeja Decorativa",
    price: 199.99,
    descount: 0,
    image: bandeja,
  },
  {
    id: 12,

    title: "Bule de café",
    price: 299.99,
    descount: 20,
    image: bule,
  },
  {
    id: 13,
    title: "Testando",
    price: 100.99,
    descount: 10,
    image: bule,
  },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Calcula o índice inicial e final dos produtos a serem exibidos na página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Função para trocar de página
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <CardsContainer>
          {currentProducts.map((product) => (
            <WholeCard key={product.id}>
              <Card
                title={product.title}
                price={product.price}
                descount={product.descount}
                image={product.image}
              />
            </WholeCard>
          ))}
        </CardsContainer>
      </ContentContainer>
      <Pagination>
        {Array.from({
          length: Math.ceil(products.length / productsPerPage),
        }).map((_, index) => (
          <Button key={index} style={{}} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </Pagination>
      <FooterContainer>© 2023 Todos os direitos reservados.</FooterContainer>
    </PageContainer>
  );
}
