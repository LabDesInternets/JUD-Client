import styled, { css } from "styled-components/macro";
import StyledBanner from "./Banner";

const StyledSection = styled(StyledBanner)`
  height: 15vh;
  background-color: ${props => props.theme.global.colors.primary};
  font-size: 2rem;
`;

export default StyledSection;
