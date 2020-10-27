import styled, { css } from "styled-components/macro";

const StyledImage = styled.img`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  border-radius: 3px;
  position: relative;
  z-index: -1;
  border: ${props => props.border || "none"};
`;

export default StyledImage;
