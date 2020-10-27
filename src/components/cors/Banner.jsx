import styled from "styled-components";

const Banner = styled.div`
  background-image: url(".${props => props.bgImg}");
  background-size: cover;
  width: ${props => props.width};
  height: ${props => props.height};
  font-size: 1.5rem;
  border-radius: 3px;
  text-align: center;
  display:flex;
  
  flex-direction:column;
  justify-content:center;
`;

export default Banner;
