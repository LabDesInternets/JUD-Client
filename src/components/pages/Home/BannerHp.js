import React from "react";
import styled, { css } from "styled-components";
import Banner from "../../cors/Banner";
import HPBanner from "../../../images/homePage-banner.jpg";
import Container from "../../cors/Container";
import StyledDiv from "../../cors/StyledDiv";
import StyledButton from "../../cors/StyledButton";
import { device } from "../../cors/ResponsiveSettings";


const BannerHp = () => {
  return (
    <Banner bgImg={HPBanner} height="600px">
      <Container fD="column" height="50%" wrap="no-wrap">
        <StyledDiv fS="2rem" fW="400">Abonnez-vous au meilleur !</StyledDiv>
        <SDivBanner>Un abonnement de vin 100% éthique</SDivBanner>
        <SDivBanner>
          Chaque mois, recevez deux bouteilles de vin bio, biodynamique ou
          nature sélectionnées rien que pour vous !
        </SDivBanner>
        <SDivBanner>29,90€/mois*</SDivBanner>
        <SDivBanner>
          <StyledButton>Je m'abonne</StyledButton>
          <StyledButton>J'offre</StyledButton>
        </SDivBanner>
      </Container>
    </Banner>
  );
};

export default BannerHp;

const SDivBanner = styled(StyledDiv)`
  font-size: 1.5rem;
  @media ${device.laptop} {
    width: 40rem;
  }
`;
