import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Heading>Karin Nordkvist - Frontend Developer - Designer</Heading>
      <Stroke></Stroke>
      <IntroWrapper>
        <IntroImage src="./images/karin.jpg" />
        <IntroText>
          Hello! I'm a happy conceptual creator with roots in the Graphic Design
          Industry. I love solving problems, coming up with creative solutions
          and make them come to life. Code has been a friend of mine for years,
          but recently we started bonding and now we've become best friends. I
          feel like this is just the beginning of something big...
        </IntroText>
      </IntroWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 28px;
  text-align: center;
  margin: 80px auto 50px auto;
  font-weight: 400;

  @media (max-width: 650px) {
    margin: 80px 80px 50px 80px;
  }

  @media (max-width: 380px) {
    margin: 80px auto 50px auto;
  }
`;

const Stroke = styled.div`
  width: 100%;
  height: 2px;
  background: #000;
`;

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 120px auto;

  @media (max-width: 850px) {
    margin: 80px auto;
  }
  @media (max-width: 650px) {
    margin: 80px auto;
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const IntroImage = styled.img`
  width: 16vw;
  height: auto;
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: rotate(-5deg);
  }

  @media (max-width: 650px) {
    margin-top: 50px;
    flex-direction: column;
    width: 100%;

    &:hover {
      transform: rotate(0deg);
    }
  }
`;

const IntroText = styled.p`
  font-size: 22px;
  line-height: 1.6;
  text-align: left;
  margin-left: 100px;

  @media (max-width: 650px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 380px) {
    font-size: 18px;
  }
`;
