import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../../actions/userActions";
import * as Yup from "yup";
import styled, { css } from "styled-components";
import StyledButton from "../../cors/StyledButton";
import Container from "../../cors/Container";
import StyledDiv from "../../cors/StyledDiv";
import StyledLink from "../../cors/StyledLink";
import StyledInput from "../../cors/StyledInput";
import StyledForm from "../../cors/StyledForm";


// const SignBtn = styled(StyledButton)`
//   width: 15rem;
// `;

const SignupValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Votre prénom doit contenir au moins 2 caractères!")
    .max(50, "Votre prénom ne peut pas dépasser 50 caractères!")
    .required("Veuillez renseigner votre prénom"),
  lastName: Yup.string()
    .min(2, "Votre nom doit contenir au moins 2 caractères!")
    .max(50, "Votre nom ne peut pas dépasser 50 caractères!")
    .required("Veuillez renseigner votre nom"),
  email: Yup.string()
    .email("email non valide")
    .required("Merci de renseigner votre email"),
  password: Yup.string()
    // .matches("^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$") //at least one lowercase letter, one uppercase letter and a number
    .required("Veuillez saisir votre mot de passe"),
  passwordConfirm: Yup.string()
    // .matches("^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$") //at least one lowercase letter, one uppercase letter and a number
    .required("Veuillez confirmer votre mot de passe")
});

const SignUp = props => {
  const { user, signUp, isAuth } = props;
  const { register, handleSubmit, errors } = useForm({
    // validationSchema: SignupValidation
  });

  const onSubmit = async data => {
    const newUser = { ...data };
    signUp(newUser);
  };

  return (
    <Container width="100vw" height="80vh">
      {user && isAuth && <Redirect to="/dashboard" />}
      <Container fD="column" height="80%">
        <Container fD="column" height="30%">
          <StyledDiv fS="2.5rem">Créé ton compte</StyledDiv>
          <StyledDiv fS="1.5rem">
            Tu as déjà un compte?
            <StyledLink to="/signin">Se connecter</StyledLink>
          </StyledDiv>
        </Container>

        <StyledForm onSubmit={handleSubmit(onSubmit)} height="60%">
          <StyledInput
            name="lastName"
            type="text"
            placeholder="Nom"
            ref={register}
          />
          {errors.lastName && errors.lastName.message}
          <StyledInput
            name="firstName"
            type="text"
            placeholder="Prénom"
            ref={register}
          />
          {errors.firstName && errors.firstName.message}
          <StyledInput
            name="email"
            type="email"
            placeholder="Email"
            ref={register}
          />
          {errors.email && errors.email.message}
          <StyledInput
            name="password"
            type="password"
            placeholder="Mot de passe"
            ref={register}
          />
          {errors.password && errors.password.message}
          <StyledInput
            name="passwordConfirm"
            type="password"
            placeholder="Confirmez votre mot de passe"
            ref={register}
          />
          {errors.passwordConfirm && errors.passwordConfirm.message}
          <StyledButton type="submit">Créer mon compte</StyledButton>
        </StyledForm>
      </Container>
    </Container>
  );
};
const mapStateToProps = (state, props) => ({
  userProps: state.userState
});

const mapDispatchToProps = dispatch => ({
  signUp: newUser => dispatch(signUp(newUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

