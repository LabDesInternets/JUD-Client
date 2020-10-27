import styled from "styled-components";
import { device } from "./ResponsiveSettings";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: 1;
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  a {
    font-size: 1.5rem;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #0096c7;
    }
  }

  @media ${device.laptop} {
    display: none;
  }
`;

export default StyledMenu;
