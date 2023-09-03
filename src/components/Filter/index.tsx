import {
  FilterContainer,
  Title,
  OptionsContainer,
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FilterContainer>
      <Title onClick={toggleDropdown}>
        Disponibilidade
        <FontAwesomeIcon
          icon={isOpen ? faAngleUp : faAngleDown}
          style={{ justifySelf: "flex-end" }}
        />
      </Title>
      <OptionsContainer isOpen={isOpen}>
        <Checkbox>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Em estoque (6)</CheckboxLabel>
        </Checkbox>
        <Checkbox>
          <CheckboxInput type="checkbox" />
          <CheckboxLabel>Fora de estoque (0)</CheckboxLabel>
        </Checkbox>
      </OptionsContainer>
    </FilterContainer>
  );
}
