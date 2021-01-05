import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

export const Tech = ({ offset }) => {
  const wrapperRef = useRef();
  const [currentOffset, setCurrentOffset] = useState();
  const [currentHeight, setCurrentHeight] = useState();

  useEffect(() => {
    setCurrentOffset(wrapperRef.current.offsetTop);
    setCurrentHeight(wrapperRef.current.scrollHeight);
  }, []);

  return (
    <TechWrapper
      offset={offset}
      ref={wrapperRef}
      currentOffset={currentOffset}
      currentHeight={currentHeight}
    >
      <TechText>
        HTML5, CSS3, <Highlighted>JavaScript</Highlighted>, ES6,{' '}
        <Highlighted>React/JSX, Redux</Highlighted>, Node.js, Express, MongoDB,{' '}
        <Highlighted>Sass, Styled Components</Highlighted>, APIs, Figma, Adobe
        CC, Wordpress, WooCommerce, Web Accessibility, SEO, mob-programming,
        pair-programming, Github, Command Line.
      </TechText>
    </TechWrapper>
  );
};

const TechWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight
      ? '#fff'
      : '#f4f0ec'};
  opacity: ${(props) =>
    props.offset < props.currentOffset - props.currentHeight ? '0' : '1'};
  padding: 100px;
  transition: all 1s ease-in-out;

  @media (max-width: 380px) {
    padding: 80px 0;
  }
`;

const TechText = styled.p`
  font-size: 32px;
  line-height: 1.6;
  text-align: center;
  width: 60vw;
  max-width: 1050px;

  @media (max-width: 380px) {
    font-size: 24px;
  }
`;

const Highlighted = styled.span`
  border-bottom: 2px solid #000;
`;
