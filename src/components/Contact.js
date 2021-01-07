import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { FooterSocial } from './Social';

export const Contact = ({ offset }) => {
  const wrapperRef = useRef();
  const [currentOffset, setCurrentOffset] = useState();
  const [currentHeight, setCurrentHeight] = useState();

  useEffect(() => {
    setCurrentOffset(wrapperRef.current.offsetTop);
    setCurrentHeight(wrapperRef.current.scrollHeight);
  }, []);

  return (
    <ContactWrapper
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
      <FooterSocial />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight
      ? '#fff'
      : '#f4f0ec'};
  opacity: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight ? '0' : '1'};
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
