import styled, { css } from "styled-components/macro";

const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => props.height || "100%"};


`;

export default StyledForm;
