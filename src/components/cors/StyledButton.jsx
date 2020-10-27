import styled, { css } from "styled-components/macro";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 5px;
  width: ${props => props.w || "11rem"};
  border: 2px solid ${props => props.theme.global.colors.strongCyan};
  color: ${props => props.theme.global.colors.strongCyan};
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  &&:hover {
    background: ${props => props.theme.global.colors.strongCyan};
    color: white;
  }

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.global.colors.strongCyan};
      color: white;
      border: 2px solid ${props => props.theme.global.colors.strongCyan};
    `}
`;

export default StyledButton;
