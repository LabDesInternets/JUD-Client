import React from "react";
import { Link } from "react-router-dom";
import CartList from "../../cors/CartList";
import styled from "styled-components";
import { connect } from "react-redux";
import { device } from "../../cors/ResponsiveSettings";
import {
  getCartFromStorage,
  emptyCart,
  removeFromCart,
  addProduct,
  removeOneFromCart
} from "../../../actions/cartActions";
import Container from "../../cors/Container";
import StyledDiv from "../../cors/StyledDiv";
import StyledButton from "../../cors/StyledButton";

const CartListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;



const Cart = props => {
  const { element } = props;
  const { cart, toTal } = props.cartProps;

  let productsInCart = [];

  Object.keys(cart).forEach(bottleId => {
    productsInCart.push({
      id: cart[bottleId].id,
      cuvee: cart[bottleId].cuvee,
      quantity: cart[bottleId].quantity,
      price: cart[bottleId].publicPrice
    });
  });

  if (toTal.totalQuantity === 0) {
    return (
      <Container height="80vh" fD="column" jC="center" ref={element}>
        <div>Votre panier est vide</div>
        <Link to="/boutique">
          <StyledButton style={{ width: "18rem" }}>
            Aller le remplir de bonnes bouteilles!
          </StyledButton>
        </Link>
      </Container>
    );
  } else {
    return (
      <>
        <Container aI="self-start">
          <Container height="auto">
            <CartListContainer style={{ borderBottom: "2px #F5F0F6 solid" }}>
              <Container jC="center">
                <StyledDiv tA="center">Cuvée</StyledDiv>
              </Container>
              <Container wrap="nowrap">
                <StyledDiv>Quantité</StyledDiv>
                <StyledDiv>Prix Unitaire</StyledDiv>
                <StyledDiv>Total</StyledDiv>
              </Container>
            </CartListContainer>

            {productsInCart.map((bottle, i) => (
              <CartList bottle={bottle} key={i} />
            ))}

            <CartListContainer>
              <Container jC="center">
                <StyledDiv tA="center"></StyledDiv>
              </Container>
              <Container wrap="nowrap">
                <StyledDiv></StyledDiv>
                <StyledDiv></StyledDiv>
                <StyledDiv style={{ borderTop: "2px #F5F0F6 solid" }}>
                  {toTal.totalCost} €
                </StyledDiv>
              </Container>
            </CartListContainer>
          </Container>
        </Container>

        <Container>
          <StyledButton>Je valide mon panier</StyledButton>
        </Container>

      </>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
