import styled from 'styled-components';
import { Button, CustomSelect, Input } from '../common';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from './SelectOptions';
import { useState } from 'react';

const DEFAULT_FORM_STATE = {
  status: '',
  gender: '',
  species: '',
  name: '',
  type: ''
};

export function Filters({ className }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_STATE);

  const handleChangeInput = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name.toLowerCase()]: e.target.value };
    });
  };

  const handleChangeSelect = (name, value) => {
    setFormData((prev) => {
      return { ...prev, [name.toLowerCase()]: value.value };
    });
  };

  const getSelectValue = (fieldName, options) => {
    if (!formData[fieldName]) return null;

    return options.find((option) => option.value === formData[fieldName]);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClickReset = () => {
    setFormData(DEFAULT_FORM_STATE);
  };

  return (
    <FiltersContainer className={className}>
      <StyledForm onSubmit={handleSubmitForm}>
        <StyledCustomSelectFirst
          placeholder="Status"
          options={STATUS_OPTIONS}
          onChange={(value) => handleChangeSelect('status', value)}
          value={getSelectValue('status', STATUS_OPTIONS)}
        />
        <StyledCustomSelectSecond
          placeholder="Gender"
          options={GENDER_OPTIONS}
          onChange={(value) => handleChangeSelect('gender', value)}
          value={getSelectValue('gender', GENDER_OPTIONS)}
        />
        <StyledCustomSelectThird
          placeholder="Species"
          options={SPECIES_OPTIONS}
          onChange={(value) => handleChangeSelect('species', value)}
          value={getSelectValue('species', SPECIES_OPTIONS)}
        />
        <StyledInputFirst
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChangeInput}
        />
        <StyledInputSecond
          placeholder="Type"
          name="type"
          value={formData.type}
          onChange={handleChangeInput}
        />
        <StyledButtonFirst color="var(--accent)" type="submit">
          Apply
        </StyledButtonFirst>
        <StyledButtonSecond color="var(--red)" onClick={handleClickReset}>
          Reset
        </StyledButtonSecond>
      </StyledForm>
    </FiltersContainer>
  );
}

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;

  @media (min-width: 1520px) {
    gap: 10px;
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
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
