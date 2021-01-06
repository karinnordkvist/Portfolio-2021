import React from 'react';
import styled from 'styled-components';

export const Social = () => {
  return (
    <SocialWrapper
      offset={offset}
      ref={wrapperRef}
      currentOffset={currentOffset}
      currentHeight={currentHeight}
    >
      <ContactText>Karin Nordkvist</ContactText>
      <ContactText>
        Send me an email <a href="mailto:kontakt@karinnordkvist.se">here</a>!
      </ContactText>
      <ContactText>+46 721 77 27 77</ContactText>
    </SocialWrapper>
  );
};

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight * 2
      ? '#fff'
      : '#f4f0ec'};
  opacity: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight * 2 ? '0' : '1'};
  padding: 100px;
  transition: all 1s ease-in-out;
`;
const ContactText = styled.p`
  font-size: 32px;
  line-height: 1.6;
  text-align: center;
  width: 60vw;
  max-width: 1050px;

  @media (max-width: 380px) {
    font-size: 20px;
  }
`;

const Highlighted = styled.span`
  border-bottom: 2px solid #000;
`;
