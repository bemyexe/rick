import styled from 'styled-components';

export const Input = ({
  placeholder = 'Placeholder',
  color = '#83BF46',
  fontSize = '16px',
  value,
  onChange,
  type = 'text',
  name,
  className
}) => {
  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      _color={color}
      _fontSize={fontSize}
      value={value}
      onChange={onChange}
      type={type}
      className={className}
    />
  );
};

const StyledInput = styled.input`
  text-overflow: ellipsis;
  border-radius: 8px;
  border: 1px solid ${({ _color }) => _color};
  color: var(--white);
  padding: 12px 16px;
  font-size: ${({ _fontSize }) => _fontSize};
  background-color: var(--main);
  transition: all 0.3s linear;
  outline: none;

  &:hover,
  &:focus {
    background-color: var(--main-light);
  }
`;
