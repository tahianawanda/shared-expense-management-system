import { Link } from 'react-router';
import styled from 'styled-components';

interface ButtonProps {
  buttonSize: 'sm' | 'md';
  buttonText?: string;
  to?: string;
  onClick?: () => void,
  Icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ buttonSize, buttonText, to, onClick, Icon, type = 'button'}: ButtonProps) => {
  const sizeClass = buttonSize === 'sm' ? 'btn-small' : 'btn-medium';

  if (to) {
    return (
      <ButtonContainer as={Link} to={to} className={sizeClass}>
        {buttonText}
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer className={sizeClass} onClick={onClick} type={type}>
      {buttonText}
      {Icon}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  border: none;
  background: #e6e6e6;
  color: #292a2b;
  font-weight: 600;
  border-radius: 15px;
  outline: 2px solid #3d3e40;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: #ffffff;
    outline: 2px solid #ffffff;
  }
  &.btn-medium {
    padding: 0.5rem 0.8rem;
    font-size: clamp(0.7rem, 0.68rem + 0.1vw, 0.8rem);
  }
  &.btn-small {
    padding: 0.4rem 0.7rem;
    font-size: clamp(0.7rem, 0.68rem + 0.1vw, 0.8rem);
  }
`;