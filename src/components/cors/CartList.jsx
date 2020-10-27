import React, { useEffect } from "react";
import styled, { css } from "styled-components/macro";
import StyledDiv from "./StyledDiv";
import Container from "./Container";
import SSpan from "../../components/cors/SSpan";
import { device } from "./ResponsiveSettings";
import { connect } from "react-redux";
import {
  getCartFromStorage,
  emptyCart,
  removeFromCart,
  addProduct,
  removeOneFromCart
} from "../../actions/cartActions";

const CartListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const CartList = props => {
  const { bottle } = props;

  return (
    <CartListContainer>
      <Container jC="center">
        <StyledDiv tA="center">{bottle.cuvee}</StyledDiv>
      </Container>
      <Container wrap="nowrap">
        <StyledDiv>
          <SSpan onClick={() => props.removeOneFromCart(bottle)}>-</SSpan>
          {bottle.quantity}
          <SSpan onClick={() => props.addProduct(bottle)}>+</SSpan>
        </StyledDiv>
        <StyledDiv>{bottle.price} €</StyledDiv>
        <StyledDiv>{bottle.price * bottle.quantity} €</StyledDiv>
      </Container>
    </CartListContainer>
  );
};

const mapStateToProps = (state, props) => ({
  cartProps: state.cartState
});
const mapDispatchToProps = dispatch => ({
  addProduct: bottle => dispatch(addProduct(bottle)),
  getCartFromStorage: () => dispatch(getCartFromStorage()),
  emptyCart: () => dispatch(emptyCart()),
  removeFromCart: bottle => dispatch(removeFromCart(bottle)),
  removeOneFromCart: bottle => dispatch(removeOneFromCart(bottle))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
