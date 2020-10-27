import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../../actions/apiActions";
import { addProduct } from "../../../actions/cartActions";
import Container from "../../cors/Container";
import StyledImage from "../../cors/StyledImage";
import StyledDiv from "../../cors/StyledDiv";
import StyledButton from "../../cors/StyledButton";


const UrlWines = `/wines`;

const WineDetails = props => {
  const { element } = props;

  const { wine } = props.wineProps;
  const { id } = props.match.params;

  useEffect(() => {
    props.fetchData(`WINE_DETAILS`, `${UrlWines}/${id}`);
  }, [id]);

  return (
    <>
      {wine && (
        <Container jC="center" height="50vh" ref={element}>
          <Container width="70%" >
            <StyledImage src={wine.winePic} width="300px" height="500px" alt="" />
            <Container fD="column" width="50%">
              <StyledDiv fS="1.7rem">{wine.cuvee} du {wine.domaine}</StyledDiv>
              <StyledDiv>{wine.publicPrice},00€</StyledDiv>
              <StyledDiv>{wine.description}</StyledDiv>
              <StyledButton onClick={() => props.addProduct(wine)}>Ajouter au panier</StyledButton>
            </Container>
          </Container>
        </Container>
      )
      }
    </>
  );
};

const mapStateToProps = (state, props) => ({
  wineProps: state.wineState,
  cartProps: state.cartState
});
const mapDispatchToProps = dispatch => ({
  fetchData: (url, dataType) => dispatch(fetchData(url, dataType)),
  addProduct: wine => dispatch(addProduct(wine))
});
export default connect(mapStateToProps, mapDispatchToProps)(WineDetails);
