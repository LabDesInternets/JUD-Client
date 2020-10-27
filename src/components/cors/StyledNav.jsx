import styled, { css } from "styled-components/macro";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  width: ${props => props.width || "80%"};

  /* ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `} */
`;

export default StyledNav;
