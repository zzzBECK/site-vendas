import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  HeaderContainer,
  Logo,
  SearchBar,
  UserIcon,
  CartContainer,
  ButtonsContainer,
} from "./styles";

export default function SubHeader() {
  return (
    <HeaderContainer>
      <Logo>
        <FontAwesomeIcon icon={faStore} color="#333" />
        Nome da Loja
      </Logo>
      <ButtonsContainer>
        <SearchBar
          type="text"
          placeholder="Pesquisar..."
          style={{ border: "" }}
        />
        <UserIcon>
          <FontAwesomeIcon icon={faUser} />
        </UserIcon>
        <CartContainer>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>3</span>
        </CartContainer>
      </ButtonsContainer>
    </HeaderContainer>
  );
}
