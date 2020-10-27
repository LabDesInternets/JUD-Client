import React from "react";
import styled from "styled-components";
import Container from "../../cors/Container";
import HPGrapes from "../../../images/homePage/vin_ethique.jpg";
import HPBarils from "../../../images/homePage/selon_gout.jpg";
import HPBg from "../../../images/homePage/prix_domaine_bis.jpg";
import { device } from "../../cors/ResponsiveSettings";


const BeingJUD = () => {
  return (
    <>
      <Wrapper>
        <ImgWrapper src={HPGrapes}></ImgWrapper>

        <ContentWrapper>
          <StyledContent>
            <Title>Des vins 100% éthique</Title>
            <div>
              Tous nos vins s'inscrivent dans un mode de fabrication respectueux
              de l'environnement et de la santé. JUD, c'est un engagement assumé
              aux côtés de vignerons qui partagent les mêmes valeurs. Nos vins
              sont bio, biodynamiques, natures, vegan, sans sulfites ou sans
              label pour certains et proviennent tous d'une production durable.
            </div>
          </StyledContent>
        </ContentWrapper>
      </Wrapper>

      <Wrapper>
        <ContentWrapper>
          <StyledContent>
            <Title>Des vins choisis selon vos goûts</Title>
            <div>
              À chaque début d'abonnement, quelques questions pour cadrer vos
              goûts puis la sélection s'affine chaque mois avec vos
              dégustations. JUD, c'est un peu votre sommelier personnel.
            </div>
          </StyledContent>
        </ContentWrapper>

        <ImgWrapper src={HPBarils} />
      </Wrapper>

      <Wrapper>
        <ImgWrapper src={HPBg} />
        <ContentWrapper>
          <StyledContent>
            <Title>Vos coups de cœur à prix domaine</Title>
            <div>
              JUD vous permet d'acheter vos coups de cœur au même prix que si
              vous alliez les chercher vous-même au domaine sauf que... Vous
              n'avez pas à vous déplacer, pratique !
            </div>
          </StyledContent>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default BeingJUD;

const StyledContent = styled(Container)`
  color: ${props => props.color || "black"};
  height: 100%;
  padding: 2rem 5rem;
  margin: 0;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
const ImgWrapper = styled.img`
  object-position: 50%;
  object-fit: cover;

  @media ${device.laptop} {
    width: 50vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  @media ${device.laptop} {
    flex-direction:row;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 50vw;
  }  
`;
const Title = styled.div`
  font-size: 2.75rem;
  color: ${props => props.theme.global.colors.secondary};
  padding: 2rem 0;
  text-align: center;
`;
