export const handleValue = (price: number, descount: number) => {
  const discountedPrice = price * (1 - descount / 100);
  return formatPrice(discountedPrice);
};

export const formatPrice = (price: number) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
