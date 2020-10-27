import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8ad;
`;

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1000;
`;
const FullPageLoader = props => {
  const { isLoading } = props;
  if (!isLoading) return null;

  return (
    <Wrapper>
      <LoadingDiv>
        <ReactLoading type="bars" color="#17bebb" />
      </LoadingDiv>
    </Wrapper>

  );
};
const mapStateToProps = state => ({
  isLoading: state.userState.isLoading || state.wineState.isLoading
})

export default connect(mapStateToProps)(FullPageLoader);
