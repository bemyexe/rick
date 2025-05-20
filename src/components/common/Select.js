import styled from 'styled-components';
import Select from 'react-select';

const CUSTOM_STYLES = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: 'var(--accent)',
    '&:hover': {
      background: 'var(--main-light)',
      borderColor: 'var(--accent)'
    },
    borderRadius: '8px',
    boxShadow: 'none',
    background: state.isFocused ? 'var(--main-light)' : 'var(--main)'
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? 'var(--accent-light)' : 'var(--white)',
    color: 'var(--black)',
    fontWeight: state.isSelected ? 'bold' : 'normal',
    ':active': {
      background: 'var(--accent)'
    }
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    display: state.selectProps.menuIsOpen
      ? 'flex'
      : state.hasValue
      ? 'none'
      : 'flex',
    transition: 'transform 0.3s linear',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
    border: 'none'
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: '12px 16px'
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    margin: '0',
    padding: '0'
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none'
  }),
  clearIndicator: (baseStyles, state) => ({
    ...baseStyles,
    display: state.selectProps.menuIsOpen ? 'none' : 'flex',
    '&:hover': {
      color: 'var(--accent)',
      cursor: 'pointer'
    }
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'var(--white)'
  })
};

export const CustomSelect = ({
  placeholder = 'Select',
  value,
  onChange,
  className,
  options
}) => {
  return (
    <StyledSelect
      styles={CUSTOM_STYLES}
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      isClearable
      maxMenuHeight={180}
    />
  );
};

const StyledSelect = styled(Select)``;
