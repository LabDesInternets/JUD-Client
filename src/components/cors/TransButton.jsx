import styled from "styled-components";

const TransButton = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  font-size: 1.3rem;
  color: ${props => props.theme.global.colors.primaryLight};
`;

export default TransButton;
