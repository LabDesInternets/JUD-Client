import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactLoading from "react-loading";

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1000;
`;

const Loading = props => {
  console.log("props loading ", props)
  const { isLoading } = props;
  console.log("props loading", isLoading);
  if (!isLoading) return null;

  return (
    <>
      <LoadingDiv>
        <ReactLoading type="bars" color="#f5f0f6" />
      </LoadingDiv>
    </>
  );
};

const mapStateToProps = state => ({ isLoading: state.userState.isLoading });

export default connect(mapStateToProps)(Loading);
