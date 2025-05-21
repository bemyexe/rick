import styled from 'styled-components';
import { Button, CustomSelect, Input } from '../common';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from './SelectOptions';

export function Filters({ className }) {
  return (
    <FiltersContainer className={className}>
      <StyledCustomSelectFirst placeholder="Status" options={STATUS_OPTIONS} />
      <StyledCustomSelectSecond placeholder="Gender" options={GENDER_OPTIONS} />
      <StyledCustomSelectThird
        placeholder="Species"
        options={SPECIES_OPTIONS}
      />
      <StyledInputFirst placeholder="Name" />
      <StyledInputSecond placeholder="Type" />
      <StyledButtonFirst color="var(--accent)">Apply</StyledButtonFirst>
      <StyledButtonSecond color="var(--red)">Reset</StyledButtonSecond>
    </FiltersContainer>
  );
}

const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;

  @media (min-width: 1520px) {
    gap: 10px;
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 300px;
  }
`;

const StyledCustomSelectFirst = styled(CustomSelect)`
  grid-column: 1 / 3;
`;

const StyledCustomSelectSecond = styled(CustomSelect)`
  grid-column: 3 / 5;
`;

const StyledCustomSelectThird = styled(CustomSelect)`
  grid-column: 5 / 7;
`;

const StyledInputFirst = styled(Input)`
  grid-column: 1 / 3;
`;

const StyledInputSecond = styled(Input)`
  grid-column: 3 / 5;
`;

const StyledButtonFirst = styled(Button)`
  grid-column: 5 / 6;
`;

const StyledButtonSecond = styled(Button)`
  grid-column: 6 / 7;
`;
