import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../../actions/apiActions";
import Card from "../../Card";
import Container from "../../cors/Container";


const UrlWines = `/wines`;


const Shop = props => {

  const { wines } = props.wineProps;
  const { element } = props;

  useEffect(() => {
    props.fetchData(`WINES`, UrlWines);
  }, []);

  return (
    <Container ref={element}>
      {wines.map(bottle =>
        <Card key={bottle.id} bottle={bottle} />
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  wineProps: state.wineState
});

export default connect(mapStateToProps, { fetchData })(Shop);
