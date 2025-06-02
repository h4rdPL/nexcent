import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
