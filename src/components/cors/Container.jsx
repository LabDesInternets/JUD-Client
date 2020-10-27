import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap || "wrap"};
  flex-direction: ${props => props.fD || "row"};
  justify-content: ${props => props.jC || "space-around"};
  align-items: ${props => props.aI || "center"};
  margin: ${props => props.margin || "0 0.5rem"};
  padding: ${props => props.padding || "0.5rem 0"};
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
  z-index: 10;
  background-color: ${props => props.bgColor || "none"};

  ${props =>
    props.header &&
    css`
      position: fixed;
      top: 0;
      width: 100vw;
      height: 10%;
      z-index: 10;
    `}

  ${props =>
    props.card &&
    css`
      margin: 0.5rem 0.5rem;
      border-radius: 5px; 
    `}
`;

export default Container;
