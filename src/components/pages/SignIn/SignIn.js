import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { fetchData } from "../../../actions/apiActions";
//import { logIn } from "../../../actions/userActions";

import StyledButton from "../../cors/StyledButton";
import Container from "../../cors/Container";
import StyledDiv from "../../cors/StyledDiv";
import StyledInput from "../../cors/StyledInput";
import StyledForm from "../../cors/StyledForm";
import StyledLink from "../../cors/StyledLink";


const LoginBtn = styled(StyledButton)`
  width: 15rem;
`;

const SigninValidation = Yup.object().shape({
  email: Yup.string()
    .email("email non valide")
    .required("Merci de renseigner votre email"),
  password: Yup.string()
    // .matches("^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$") //at least one lowercase letter, one uppercase letter and a number
    .required("Veuillez saisir votre mot de passe")
});

const urlLogin = `/users/login`;

let SignIn = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { userProps, logIn } = props;
  const { from } = props.location.state || { from: { pathname: "/" } };

  const { register, handleSubmit, errors } = useForm({
    validationSchema: SigninValidation
  });

  const onSubmit = () => {
    props.fetchData(`USER`, urlLogin, `POST`, credentials);
    // logIn(credentials);
  };

  const updateCredentials = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
    console.log("formData ", FormData)
  };
  if (userProps.redirectToReferrer === true) {
    return <Redirect to={from} />;
  }
  return (
    <Container width="100vw" height="80vh">
      <Container fD="column" height="80%">
        <Container fD="column" height="30%">
          <StyledDiv fS="2.5rem">Connecte-toi</StyledDiv>
          <StyledDiv fS="1.5rem">
            Tu n'as pas encore de compte?
            <StyledLink to="/signup">Créer mon compte</StyledLink>
          </StyledDiv>
        </Container>
        <>
          <StyledForm onSubmit={handleSubmit(onSubmit)} height="60%">
            <StyledInput
              name="email"
              type="email"
              placeholder="Email"
              ref={register}
              value={credentials.email}
              onChange={updateCredentials}
            />
            {errors.email && errors.email.message}
            <StyledInput
              name="password"
              type="password"
              placeholder="Mot de passe"
              ref={register}
              value={credentials.password}
              onChange={updateCredentials}
            />
            {errors.password && errors.password.message}
            <LoginBtn type="submit">Se connecter</LoginBtn>
          </StyledForm>
        </>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state, props) => ({
  userProps: state.userState
});

const mapDispatchToProps = dispatch => ({
  fetchData: (dataType, url, method, data) => dispatch(fetchData(dataType, url, method, data)),
  //logIn: (credentials) => dispatch(logIn(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
