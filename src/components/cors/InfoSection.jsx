import React from "react";
import styled from "styled-components";
import Container from "./Container";
import InfoDiv from "./InfoDiv";
import { device } from "./ResponsiveSettings";

const InfoSection = ({ content, title = "" }) => (
  <ReasonWrapper card>
    <Container height="10%">
      {!!title && <InfoDiv title>{title}</InfoDiv>}
    </Container>
    <ContentWrapper>
      {content.map((string, i) => (
        <p key={i} content>
          {string}
        </p>
      ))}
    </ContentWrapper>
  </ReasonWrapper>
);

export default InfoSection;

const ContentWrapper = styled.div`
  height: 30vh;
  line-height: 2rem;
  text-align: center;
  padding: 1rem;

  p {
    padding: 0.5rem 0.5rem;
    width: 340px;
  }
`;

const ReasonWrapper = styled(Container)`
  width: 90vw;
  @media ${device.laptop}{
    width: 30vw;
    height: 35vh;
    align-items: flex-start;
  }

  background-color: ${props => props.theme.global.colors.veryPaleBlue};
  /* background-color: #fffaf8; */
  border-radius: 5px;
`;
