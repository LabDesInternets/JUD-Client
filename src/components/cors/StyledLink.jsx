import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  width: ${props => props.w || "100%"};
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.global.colors.secondary};
  }
  &.active {
    color: ${props => props.theme.global.colors.secondary};
  }
`;

export default StyledLink;
