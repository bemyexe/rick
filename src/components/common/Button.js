import styled from 'styled-components';

export const Button = ({
  onClick,
  children,
  color = '#ccc',
  className,
  fontSize = '16px'
}) => {
  return (
    <StyledButton
      onClick={onClick}
      _color={color}
      className={className}
      _fontSize={fontSize}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: ${({ _color }) => _color};
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${({ _color }) => _color};
  font-size: ${({ _fontSize }) => _fontSize};
  padding: 12px;
  transition: all 0.3s linear;

  &:hover {
    color: ${({ _color }) => (_color === '#ccc' ? 'black' : '#ccc')};
    background: ${({ _color }) => _color};
    border: 1px solid ${({ _color }) => _color};
  }

  &:active {
    transform: translateY(2px) scale(0.98);
  }
`;
