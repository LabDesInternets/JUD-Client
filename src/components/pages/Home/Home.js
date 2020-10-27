import React from "react";
import BannerHp from "./BannerHp";
import StyledSection from "../../cors/StyledSection";
import WhyJud from "./WhyJud";
import BeingJUD from "./BeingJUD";


const Home = ({ element }) => {
  return (
    <div ref={element}>
      <BannerHp />
      <StyledSection>Pourquoi JUD ?</StyledSection>
      <WhyJud />
      <StyledSection>Être abonné.e JUD, c'est...</StyledSection>
      <BeingJUD />
    </div>
  );
};

export default Home;
