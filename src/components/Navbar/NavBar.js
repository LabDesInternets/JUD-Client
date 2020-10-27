import React from "react";
import styled, { keyframes, css } from "styled-components";
import { connect } from "react-redux";
import { logOut } from "../../actions/userActions";
import StyledLink from "../cors/StyledLink";
import StyledIcons from "../cors/StyledIcons";
import TransButton from "../cors/TransButton";
import judLogo from "../../images/Logo_violet.jpg";
import Container from "../cors/Container";
import NavGen from "../NavGen";
import { withRouter } from "react-router-dom";
import { Basket, User, Login, Logout, Search } from "grommet-icons";
import StyledInput from "../cors/StyledInput";
import { device } from "../cors/ResponsiveSettings";

let mainMenu = ["Abonnement", "Boutique", "Cadeau", "Dégustations", "Histoire"];

const NavBar = props => {
  const { isAuth } = props.userProps;
  const { totalCart, logOut, sticky } = props;

  return (
    <Wrapper cl={sticky ? "navbarSticky" : "navbar"}>
      <div>
        <Container header>
          <LogoWrapper>
            <StyledLink to="/" w="20%">
              <StyledIcons src={judLogo} alt="jud logo" />
            </StyledLink>
          </LogoWrapper>
        </Container>

        <Container jC="space-between">
          <Container jC="center" width="30%">
            <div>
              <Search size="medium" color="brand" />
            </div>
            <div>
              <StyledInput
                width="90%"
                placeholder="un domaine, une couleur..."
              ></StyledInput>
            </div>
          </Container>

          <Container width="30%">
            <Container width="30%">
              {!isAuth ? (
                <StyledLink to="/signin" w="50%">
                  <Login size="medium" color="brand" />
                </StyledLink>
              ) : null}
              <StyledLink to="/dashboard" w="50%">
                <User size="medium" color="brand" />
              </StyledLink>
              {isAuth ? (
                <TransButton onClick={() => logOut()}>
                  <Logout size="medium" color="brand" />
                </TransButton>
              ) : null}
            </Container>

            <StyledLink to="/cart" w="20%">
              <span>{totalCart}</span>
              <Basket size="medium" color="brand" />
            </StyledLink>
          </Container>
        </Container>

        <Container>
          <NavGen menu={mainMenu} width="70%"></NavGen>
        </Container>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  cartProps: state.cartState,
  userProps: state.userState
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));

const LogoWrapper = styled.div`
  justify-content: center;
  z-index: 1000;
`;

const moveDown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`;

const Wrapper = styled.nav`
  display: none;

  @media ${device.laptop} {
    display:block;
    ${props =>
    props.cl === "navbar" &&
    css`
        background: transparent;
      `}
    ${props =>
    props.cl === "navbarSticky" &&
    css`
        width: 100vw;
        background: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        animation: ${moveDown} 0.5s ease-in-out;
      `}
  }
`;
