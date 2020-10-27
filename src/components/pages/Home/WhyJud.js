import React from "react";
import Container from "../../cors/Container";
import InfoSection from "../../cors/InfoSection";
import styled from "styled-components";
import { device } from "../../cors/ResponsiveSettings";

const WhyJud = () => (
  <Wrapper>
    <InfoSection
      title="Découvrir et comprendre vos goûts"
      content={reason1}
    ></InfoSection>

    <InfoSection
      title="Devenir un petit expert"
      content={reason3}
    ></InfoSection>

    <InfoSection title="Goûter au meilleur" content={reason2}></InfoSection>
  </Wrapper>
);

export default WhyJud;

const Wrapper = styled(Container)`
  flex-direction: column;
  @media ${device.laptop}{
    flex-direction: row;
    height:50vh;
    padding: 2rem 0.5rem;
  }
`


let reason1 = [
  "Comprendre pourquoi vous aimez cette bouteille et pas une autre",
  "Laisser tomber vos a priori sur certaines régions",
  "S'ouvrir à de nouveaux horizons",
  "Découvrir pleins de nouvelles pépites"
];
let reason2 = [
  "Des bouteilles sélectionnées par une équipe professionnelle spécialisée",
  "Une offre 100% vin éthique (bio, biodynamique, nature, sans sulfites ajoutés...)"
];
let reason3 = [
  "Apprendre les basiques pour comprendre le sommelier du restaurant",
  "Pouvoir choisir son vin sans se baser uniquement sur une belle étiquette",
  "Pouvoir parler du vin"
];
