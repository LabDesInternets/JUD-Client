import styled, { css } from "styled-components/macro";

const StyledInput = styled.input`
  /* border-radius: 5px; */
  width: ${props => props.width || "20rem"};
  height: 2.5rem;
  border: none;
  border-bottom: 1px solid
    ${props => props.theme.global.colors.lightGrayishViolet};
  font-size: 1.25rem;
  margin: 1rem 1rem;
  &: focus {
    border-bottom: 1px solid ${props => props.theme.global.colors.secondary};
    outline: none;
  }
`;

export default StyledInput;
