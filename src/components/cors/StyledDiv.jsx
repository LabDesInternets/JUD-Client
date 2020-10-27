import styled, { css } from "styled-components/macro";

const StyledDiv = styled.div`
  border-radius: 3px;
  border: black;
  /* margin: 0.5rem 1rem; */
  padding: 0.5rem 0;
  line-height:2rem;
  flex: 1 1 auto;
  font-weight: ${props => props.fW || "200"};
  text-align: ${props => props.tA || "center"};
  width: ${props => props.w || "18rem"};
  font-size: ${props => props.fS || "1rem"};
  color: ${props => props.color || "black"};



  &&:hover {
    /* color: ${props => props.theme.colors.secondary}; */
  }
`;

export default StyledDiv;
