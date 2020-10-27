import React from "react";
import styled, { css } from "styled-components/macro";
import StyledImage from "./cors/StyledImage";
import Container from "./cors/Container";
import StyledDiv from "./cors/StyledDiv";
import StyledButton from "./cors/StyledButton";
import StyledLink from "./cors/StyledLink";
import { addProduct } from "../actions/cartActions";
import { connect } from "react-redux";

const WineCard = props => {
  const { bottle } = props;
  return (
    <Container width="300px">
      <StyledLink to={`/boutique/${bottle.id}`}>
        <StyledImage src={bottle.winePic} width="300px" height="500px" alt="" />
        <Container fD="column">
          <StyledDiv>{bottle.cuvee} du {bottle.domaine}</StyledDiv>
          <StyledDiv>{bottle.publicPrice},00€</StyledDiv>
        </Container>
      </StyledLink>
      <StyledButton onClick={() => props.addProduct(bottle)}>Ajouter au panier</StyledButton>
    </Container>
  );
};

export default connect(null, { addProduct })(WineCard);
