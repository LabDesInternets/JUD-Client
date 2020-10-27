import styled, { css } from "styled-components/macro";
import Container from "./Container";

const InfoDiv = styled(Container)`
  flex-direction: column;
  text-align: center;
  margin: 0;
  padding: 0;
  height: 2.5rem;

  ${props =>
    props.title &&
    css`
      font-weight: 400;
    `}
  ${props =>
    props.content &&
    css`
      line-height: 1.75rem;
    `}
`;

export default InfoDiv;
